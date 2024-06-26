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
  text-align: right;
  padding: 10px;
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

  const handleAddToCart = (selectedSize) => {
    if (popupContent) {
      const itemPrice = {
        S: 29.99,
        M: 29.99,
        L: 29.99,
        XL: 29.99,
        "2XL": 29.99,
      }[selectedSize];

      setItemsInCart(prevItems => [
        ...prevItems,
        { ...popupContent, index: prevItems.length, price: itemPrice, name: 'T-shirt', quantity: 1 }
      ]);

      setTotalPrice(prevTotal => prevTotal + itemPrice);
    }
    setIsPopupVisible(false); // Close popup after adding to cart
  };

  const handleCheckoutClick = async () => {
    const stripe = await stripePromise;
    
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
    
    // Create a checkout session on the server
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lineItems }),
    });
  
    const session = await response.json();
  
    // Redirect to Stripe checkout page
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
        <CheckoutButton
          $isClicked={isCheckoutClicked}
          onMouseDown={handleCheckoutMouseDown}
          onMouseUp={handleCheckoutMouseUp}
          onClick={handleCheckoutClick}
        >
          Checkout
        </CheckoutButton>
        <TotalPrice>{`Total Price: $${totalPrice.toFixed(2)}`}</TotalPrice>
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
