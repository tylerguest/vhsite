import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the popup is on top */
`;

const PopupContent = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px;
  width: 80%;  /* Adjust as needed */
  height: 80%; /* Adjust as needed */
  max-width: 700px; /* Adjust as needed */
  max-height: 800px; /* Adjust as needed */
  overflow-y: auto;
  position: relative; /* To position the close button */

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 30px;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Container1 = styled.div`
  background-color: black;
  padding: 10px;
  height: 600px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  background-color: white;
  height: 101px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageThumbnail = styled.img`
  max-width: 100%;
  height: 150%; /* Ensure image aspect ratio is maintained */
  max-height: 100%; /* Ensure image doesn't overflow container */
`;

const AddToCartButton = styled.button`
  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold; /* Custom font weight */
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

const SizeSelector = styled.select`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold; /* Custom font weight */
  text-align: center;
  background-color: black;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const PriceDisplay = styled.div`
  margin: 10px;
  font-size: 18px;
  font-weight: bold; /* Custom font weight */
  color: black;
`;

const CustomTextBox = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 16px; // Customize as needed
  color: black; // Customize as needed
  border: 1px solid #ccc; // Customize as needed
  border-radius: 4px; // Customize as needed
  background-color: white; // Customize as needed
`;

const quantityTickerStyles = {
  backgroundColor: 'blue', // Example style, replace with your desired styles
  // Add more styles here
};

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const QuantityButton = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: black; // Customize as needed
  border: none; // Customize as needed
  cursor: pointer; // Customize as needed
`;

const QuantityDisplay = styled.span`
  font-size: 20px;
  color: black; // Customize as needed
  min-width: 30px;
  text-align: center;
`;

const Popup = ({ content, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const prices = {
    S: 29.99,
    M: 29.99,
    L: 29.99,
    XL: 29.99,
    "2XL": 29.99,
  };

  // Use useEffect to update price when selectedSize or quantity changes
  useEffect(() => {
    // Price calculation now accounts for both selectedSize and quantity changes
    setPrice(prices[selectedSize] * quantity);
  }, [selectedSize, quantity]); // Added quantity to dependency array


  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    const itemDetails = {
      size: selectedSize,
      quantity: quantity,
      price: prices[selectedSize],
    };
    onAddToCart(itemDetails); // Invoke the callback with item details
  };

  // Step 3: Update quantity state
  const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decreaseQuantity = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));


  return (
    <Overlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Container1>
          {content && (
            <ImageThumbnail src={content.imageSrc} alt="Thumbnail" />
          )}
        </Container1>
        <Container2>
          <SizeSelector value={selectedSize} onChange={handleSizeChange}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </SizeSelector>
          <QuantityControl>
            <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
          </QuantityControl>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
          <PriceDisplay>{`Price: $${(prices[selectedSize] * quantity).toFixed(2)}`}</PriceDisplay>
        </Container2>
      </PopupContent>
    </Overlay>
  );
};

export default Popup;
