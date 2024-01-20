import React, { useState } from "react";

const Admin = ({ addProduct }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function hendleChenge() {
    let newProduct = {
      image: image,
      name: name,
      price: price,
      id: Date.now(),
    };
    // if (newProduct !== "") {
    addProduct(newProduct);
    // }
  }
  return (
    <section id="create">
      <div className="container">
        <div className="create">
          <h2>CREATE PRODUCT</h2>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="choose file"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="food name"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="price"
          />
          <button onClick={() => hendleChenge()}>create</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
