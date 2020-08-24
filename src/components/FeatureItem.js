/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const FeatureItem = ({url, text}) => (
  <div className="features-slider_item">
    <div
      className="features-img"
      style={{backgroundImage: `url(${url})`}}
    ></div>
    <div className="features-feature">{text}</div>
  </div>
);

export default FeatureItem;
