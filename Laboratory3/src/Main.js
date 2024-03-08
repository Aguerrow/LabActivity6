import React, { useState } from "react";
import "./App.css";
import ShopData from "./ShopData";

const Main = () => {
  const stickerPacks = [
    {
      title: "STARSHIP STICKER PACK",
      price: 20,
      imageUrl: "/img/sticker.png",
      altText: "STARSHIP STICKER PACK",
    },
    {
      title: "STARLINK ANYWHERE TUMBLER",
      price: 46,
      imageUrl: "/img/tumbler.png",
      altText: "STARLINK ANYWHERE TUMBLER",
    },
    {
      title: "UNISEX DRAGON SWEATER",
      price: 80,
      imageUrl: "/img/sweater.png",
      altText: "UNISEX DRAGON SWEATER",
    },
    {
      title: "UNISEX FALCON SWEATER",
      price: 80,
      imageUrl: "/img/fsweater.png",
      altText: "UNISEX FALCON SWEATER",
    },
    {
      title: "UNISEX STARLINK SWEATER",
      price: 80,
      imageUrl: "/img/ssweater.png",
      altText: "UNISEX STARLINK SWEATER",
    },
    {
      title: "UNISEX X COLLECTION SWEATSHIRT",
      price: 60,
      imageUrl: "/img/sweatshirt.png",
      altText: "UNISEX X COLLECTION SWEATSHIRT",
    },
    {
      title: "UNISEX X COLLECTION LONG SLEEVE T-SHIRT",
      price: 40,
      imageUrl: "/img/longsleeve.png",
      altText: "UNISEX X COLLECTION LONG SLEEVE T-SHIRT",
    },
    {
      title: "UNISEX X COLLECTION JOGGERS",
      price: 65,
      imageUrl: "/img/joggers.png",
      altText: "UNISEX X COLLECTION JOGGERS",
    },
    {
      title: "UNISEX X COLLECTION PULLOVER HOODIE",
      price: 65,
      imageUrl: "/img/pullover.png",
      altText: "UNISEX X COLLECTION PULLOVER HOODIE",
    },
    {
      title: "UNISEX X COLLECTION T-SHIRT",
      price: 35,
      imageUrl: "/img/shirt.png",
      altText: "UNISEX X COLLECTION T-SHIRT",
    },
    {
      title: "UNISEX X COLLECTION ZIPPER HOODIE",
      price: 70,
      imageUrl: "/img/zipper.png",
      altText: "UNISEX X COLLECTION ZIPPER HOODIE",
    },
    {
      title: "WOMEN'S X COLLECTION CROPPED PULLOVER HOODIE",
      price: 55,
      imageUrl: "/img/cropped.png",
      altText: "WOMEN'S X COLLECTION CROPPED PULLOVER HOODIE",
    },
    {
      title: "WOMEN'S X COLLECTION CROPPED ZIPPER HOODIE",
      price: 60,
      imageUrl: "/img/croppedzip.png",
      altText: "WOMEN'S X COLLECTION CROPPED ZIPPER HOODIE",
    },
    {
      title: "X ADJUSTABLE CAP",
      price: 25,
      imageUrl: "/img/cap.png",
      altText: "X ADJUSTABLE CAP",
    },
    {
      title: "X TRUCKER CAP",
      price: 30,
      imageUrl: "/img/trucker.png",
      altText: "X TRUCKER CAP",
    },
    {
      title: "WOMEN'S X COLLECTION T-SHIRT",
      price: 35,
      imageUrl: "/img/collectshirt.png",
      altText: "WOMEN'S X COLLECTION T-SHIRT",
    },
  ];

  return (
    <div className="Main-cover">
      <img src="/img/cover.png" alt="Cover" className="cover-image" />
      <h1 className="Trending">TRENDING</h1>
      <div className="Main-content">
        {stickerPacks.map((pack, index) => (
          <ShopData key={pack.title} {...pack} isSoldOut={pack.price <= 50} />
        ))}
      </div>
    </div>
  );
};

export default Main;
