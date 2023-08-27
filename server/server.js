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
                        name: item.name
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            })),
            payment_method_types: ['card'],
        shipping_address_collection: {
        allowed_countries: ['RO'],
        },
            shipping_options: [
            {
                shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                    amount: 0,
                    currency: 'ron',
                },
                display_name: 'Your food will be ordered under',
                // Delivers between 5-7 business days
                delivery_estimate: {
                    minimum: {
                    unit: 'hour',
                    value: 1,
                    },
                    maximum: {
                    unit: 'hour',
                    value: 2,
                    },
                }
                }
            }
            ],
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