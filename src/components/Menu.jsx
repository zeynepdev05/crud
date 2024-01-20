import React, { useEffect } from "react";

const Menu = ({ readProduct, data, deleteProduct }) => {
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <section id="menu">
      <div className="container">
        <div className="menu">
          {data.map((el) => (
            <div className="card">
              <img src={el.image} alt="" />
              <div className="card_text">
                <p>{el.name}</p>
                <p>{el.price}</p>
              </div>
              <div className="card_action">
                <button onClick={() => deleteProduct(el.id)}>Delete</button>
                <button>Orders</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
