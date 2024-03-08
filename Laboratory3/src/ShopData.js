import React, { useState, useEffect } from "react";
import "./App.css";

const ShopData = (props) => {
  const { imageUrl, altText, title, price, isSoldOut } = props;

  const textDecoration = isSoldOut ? "line-through" : "none";
  const color = isSoldOut ? "grey" : "black";

  const isFlashSale = price === 80 && isFlashSaleOngoing();
  const discountPrice = isFlashSale ? price * 0.5 : null;

  //timer
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const currentDate = new Date();
    const flashSaleEndDate = new Date("2024-02-20");
    const difference = flashSaleEndDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function isFlashSaleOngoing() {
    const currentDate = new Date();
    const flashSaleStartDate = new Date("2024-02-19");
    const flashSaleEndDate = new Date("2024-02-20");

    return currentDate >= flashSaleStartDate && currentDate < flashSaleEndDate;
  }

  return (
    <div className="shop-data">
      <div className={`shop-image-container ${isSoldOut ? "sold-out" : ""}`}>
        {isFlashSale && (
          <label className="flash-sale-label">
            50% Off Flash Sale - {timeLeft.days}d {timeLeft.hours}h{" "}
            {timeLeft.minutes}m {timeLeft.seconds}s left
          </label>
        )}
        <img src={imageUrl} alt={altText} className="shop-image" />
        {isSoldOut && <p className="sold-out-label">SOLD OUT</p>}
      </div>
      <h2 className="title" style={{ textDecoration, color }}>
        {title}
      </h2>
      <div className="price" style={{ color }}>
        {/* Always display the original price */}
        <span style={{ textDecoration: isFlashSale ? "line-through" : "none" }}>
          ${price}.00
        </span>
        {/* Display discounted price only if it's in flash sale */}
        {isFlashSale && ` (Sale: $${discountPrice}.00)`}
      </div>
    </div>
  );
};

export default ShopData;
