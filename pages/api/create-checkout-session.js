// Import the Stripe library
const stripe = require('stripe')('sk_test_51PVyU2LnEBkEceTD9VUvFyCrCRSNdIG3TFrhu1xYWlhRgKVEQLWJQHyA695HpVPvWrOAOC4VZ8bEuAUPO4XEcLym00EXYsw3PX');

// Function to calculate shipping costs based on shippingInfo and the number of items
function calculateShippingCost(shippingInfo, numberOfItems) {
  let baseCost = 0;
  if (shippingInfo.country === 'US') {
    baseCost = 500; // $5.00 shipping for US
  } else if (shippingInfo.country === 'CA') {
    baseCost = 700; // $7.00 shipping for Canada
  }
  // Calculate additional charge for each item after the first
  const additionalCharge = Math.max(0, numberOfItems - 1) * 200; // $2 in cents for each additional item
  return baseCost + additionalCharge; // Return total cost in cents
}

// Next.js API route handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { lineItems, shippingInfo } = req.body;

      // Calculate shipping cost, now also based on the number of items
      const shippingCost = calculateShippingCost(shippingInfo, lineItems.length);

      // Add shipping cost as a line item
      const totalLineItems = [
        ...lineItems,
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Shipping',
            },
            unit_amount: calculateShippingCost(shippingInfo, 1), // Calculate shipping cost per item
          },
          quantity: lineItems.length, // Set the quantity to the number of items
        },
      ];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: totalLineItems,
        mode: 'payment',
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'],
        },
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
      });

      res.status(200).json(session);
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Failed to create checkout session' });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}