import React from "react";
import "./CatPicture.css";

const CatPicture = ({ src }) => {
  return <img className="catPicture__image" src={src} alt="A cat" />;
};

export default CatPicture;
