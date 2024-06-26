import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import styled from 'styled-components';

const stripePromise = loadStripe('pk_test_51PVyU2LnEBkEceTDEPihBPxqv9vLVF3gb9FPZFePOKrnBMkIJxIwwJc4Rb4XAlft2uvQzlGe9HPBiIthNG1fzRcT00Os9yWNP9'); // Replace with your Stripe publishable key

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { data: clientSecret } = await axios.post('http://localhost:3001/create-payment-intent', {
      amount: Math.round(totalPrice * 100),
    });

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    setLoading(false);

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
    } else {
      setError(null);
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

const StripeCheckout = ({ totalPrice }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalPrice={totalPrice} />
    </Elements>
  );
};

export default StripeCheckout;
