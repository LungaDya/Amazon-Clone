import React from "react";
import "./Home.css";
import Products from "./Products";


const Home = () => {
  return (
   
      <div className="home">
        <div className="home_container">
          <img className="home_image"
            src="https://m.media-amazon.com/images/I/71ks+JWHatL._SX3000_.jpg"
            alt=""
          />
          <Products />
        </div>
      </div>
    
  );
};

export default Home;
