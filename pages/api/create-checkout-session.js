import Stripe from 'stripe';

const stripe = require('stripe')('sk_test_51PVyU2LnEBkEceTD9VUvFyCrCRSNdIG3TFrhu1xYWlhRgKVEQLWJQHyA695HpVPvWrOAOC4VZ8bEuAUPO4XEcLym00EXYsw3PX');

async function createCheckoutSession(req, res) {
  try {
    const { lineItems } = req.body; // Extract lineItems from request body

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });

    res.status(200).json(session);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}

export default createCheckoutSession;
