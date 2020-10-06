import React, { useState, useEffect } from "react";
import "./App.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(
      `https://fortniteapi.io/v1/items/upcoming?lang=en`,
      { headers: { Authorization: "b7915d13-0cd607b3-7ee453e5-026f6aa7" } }
    );
    const items = await data.json();
    console.log(items);
  };
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
