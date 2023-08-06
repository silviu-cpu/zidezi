const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express()
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(cors({origin: true, credentials: true}));


const stripe = require("stripe")("sk_test_51Nc6sEArMML4vzqfa6cfeArUr07g6bTP6IZn7uP5YIsy3xFFuGE5v1dxcVVqWaLmXoOpRzdaT9u8uGnL6NTB4KVM00AvdwKMYE")

app.post("/checkout", async(req,res,next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: 'ron',
                    product_data: {
                        name:'Plm'
                    },
                    unit_amount: 2000,
                },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html"
        });

        res.status(200).json(session);

    } catch (error) {
        next(error)
    }
})

app.listen(4242, () => console.log('app is running on 4242'))