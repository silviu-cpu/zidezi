/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const stripe = require("stripe")("sk_test_51Nc6sEArMML4vzqfa6cfeArUr07g6bTP6IZn7uP5YIsy3xFFuGE5v1dxcVVqWaLmXoOpRzdaT9u8uGnL6NTB4KVM00AvdwKMYE")

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


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

      res.json({ sessionId: session.id });

  } catch (error) {
      next(error)
  }
})


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
