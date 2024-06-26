const express = require('express');
const stripe = require('stripe')('sk_test_51PVyU2LnEBkEceTD9VUvFyCrCRSNdIG3TFrhu1xYWlhRgKVEQLWJQHyA695HpVPvWrOAOC4VZ8bEuAUPO4XEcLym00EXYsw3PX'); // Replace with your Stripe secret key
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
