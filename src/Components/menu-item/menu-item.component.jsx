import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, id, size, linkUrl, history }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 key={id} className="title">
        {title.toUpperCase()}
      </h1>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);

export default withRouter(MenuItem);
