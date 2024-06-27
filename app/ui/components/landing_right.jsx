import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import Popup from './Popup';
import Image from 'next/image';

// Define styled components here
const ImageThumbnail = styled.img`
  max-width: 100%;
  height: 150%; /* Ensure image aspect ratio is maintained */
  max-height: 100%; /* Ensure image doesn't overflow container */
`;

const LandingRightContainer = styled.div`
  background-color: black;
  border-opacity: 0.5;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const UpperContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding: 10px;
  padding-bottom: 20px;
  gap: 10px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 29px;
  row-gap: 25px;
  align-items: center;
  justify-items: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const CheckoutButton = styled.button`
  grid-column: span;
  background-image: url('/checkoutbutton.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  color: black;
  font-size: 1.5em;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$isClicked ? 0.3 : 1)};
  
  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.3;
  }
`;

const LowerContainer = styled.div`
  background-color: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;

const SubContainer = styled.div`
  background-image: url('/merchmain.png');
  background-size: cover;
  background-position: center;
  color: yellow;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgColor};
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.5;
  }
`;

const SmallBox = styled.div`
  background-image: url('/itemcontainer.png');
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
`;

const TotalPrice = styled.div`
  color: white;
  font-size: 1.2em;
  text-align: center;
  padding: -10px;
  font-family: 'Arial', sans-serif; /* Custom font family */
  font-weight: bold; /* Custom font weight */
  font-style: ; /* Custom font style */
`;

const LandingRight = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const colors = [
    "#FF6347", // Tomato
    "#FFA07A", // LightSalmon
    "#20B2AA", // LightSeaGreen
    "#87CEFA", // LightSkyBlue
    "#9370DB", // MediumPurple
    "#FFD700", // Gold
    "#32CD32", // LimeGreen
    "#FF4500"  // OrangeRed
  ];

  const stripePromise = loadStripe('pk_test_51PVyU2LnEBkEceTDEPihBPxqv9vLVF3gb9FPZFePOKrnBMkIJxIwwJc4Rb4XAlft2uvQzlGe9HPBiIthNG1fzRcT00Os9yWNP9'); // Replace with your Stripe publishable key

  const handleSubContainerClick = (color, index) => {
    setPopupContent({
      imageSrc: `/merchmain.png`, // Replace with actual image source
      color,
      index
    });
    setIsPopupVisible(true);
    setSelectedItemIndex(index);
  };

  const handleCheckoutMouseDown = () => {
    setIsCheckoutClicked(true);
  };

  const handleCheckoutMouseUp = () => {
    setIsCheckoutClicked(false);
  };

  const handleAddToCart = (selectedSize, quantity) => {
    if (popupContent) {
      // Define item prices based on size
      const itemPrice = {
        S: 29.99,
        M: 34.99, // Updated price for M
        L: 39.99, // Updated price for L
        XL: 44.99, // Updated price for XL
        "2XL": 49.99, // Updated price for 2XL
      }[selectedSize];
  
      // Add item to cart with updated properties including the specified quantity
      setItemsInCart(prevItems => [
        ...prevItems,
        { ...popupContent, index: prevItems.length, price: itemPrice, size: selectedSize, name: 'T-shirt', quantity: quantity } // Use the quantity parameter
      ]);
  
      // Update total price, taking into account the quantity
      setTotalPrice(prevTotal => prevTotal + (itemPrice * quantity) - (5 * quantity)); // Subtract $5 for each item
    }
    // Close popup after adding to cart
    setIsPopupVisible(false);
  };

  const handleCheckoutClick = async () => {
    const stripe = await stripePromise; // Ensure stripePromise is correctly initialized
    
    // Prepare line_items array based on itemsInCart state
    const lineItems = itemsInCart.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
      },
      quantity: item.quantity,
    }));
  
    // Assuming shippingInfo is available in the scope. If not, you'll need to define it.
    const shippingInfo = {
      country: 'US', // Example, this should be dynamically set based on user input
      // Add other shipping info fields as necessary
    };

    // Create a checkout session on the server
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lineItems, shippingInfo }), // Include shippingInfo in the request body
    });

    const session = await response.json();

    // Check if session ID is present
    if (!session.id) {
      console.error('Session ID not found. Unable to redirect to checkout.');
      // It's a good practice to also check for and display any error messages from the server
      if (session.error) {
        console.error('Error from server:', session.error);
      }
      return;
    }

    // Redirect to Stripe checkout page using the session ID
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error('Error redirecting to checkout:', result.error.message);
    }
  };
  
  

  return (
    <LandingRightContainer>
      <UpperContainer>
        <ItemsContainer>
          {Array.from({ length: 12 }, (_, index) => (
            <SmallBox key={index}>
              {itemsInCart[index] && (
                <ImageThumbnail src={itemsInCart[index].imageSrc} alt="Thumbnail" />
              )}
            </SmallBox>
          ))}
        </ItemsContainer>
        <TotalPrice>{`Total Price: $${totalPrice.toFixed(2)}`}</TotalPrice>   
        <CheckoutButton
          $isClicked={isCheckoutClicked}
          onMouseDown={handleCheckoutMouseDown}
          onMouseUp={handleCheckoutMouseUp}
          onClick={handleCheckoutClick}
        >
        </CheckoutButton>
      </UpperContainer>
      <LowerContainer>
        {colors.map((color, index) => (
          <SubContainer
            key={index}
            $bgColor={color}
            onClick={() => handleSubContainerClick(color, index)}
          >
            <h1></h1>
          </SubContainer>
        ))}
      </LowerContainer>
      {isPopupVisible && (
        <Popup
          content={popupContent}
          onClose={() => setIsPopupVisible(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </LandingRightContainer>
  );
};

export default LandingRight;
