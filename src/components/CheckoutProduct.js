import React, { useContext } from "react";
import ShoppingContext from "../context/shopping/shoppingContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removefromBasket } = shoppingContext;

  const removefromBasketHandler = () => {
    removefromBasket({ id: id });
  };
  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="checkout_product_price">
          <small>R</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
        <button onClick={removefromBasketHandler}>Remove From Basket</button>
      )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
