import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
      <Link to="/">
        {" "}
        <div>
          <img
            className="img_top"
            src="https://imageio.forbes.com/blogs-images/zarastone/files/2017/05/21Amazon-Barkley-404.jpg?height=711&width=711&fit=bounds"
            alt=""
          />
        </div>
        <div></div>
      </Link>
    </div>
  );
};

export default NotFound;
