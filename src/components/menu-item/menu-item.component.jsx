import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ id, imageUrl, title, size }) => (
  <div className={size + " menu-item"} key={id}>
    <div
      className="background-image"
      style={{ backgroundImage: "url(" + imageUrl + ")" }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);
export default MenuItem;
