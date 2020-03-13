import React from "react";
import "./View.css";

import CatPicture from "../../components/CatPicture/CatPicture";
import CatAbout from "../../components/CatAbout/CatAbout";
import CatCarousel from "../../components/CatCarousel/CatCarousel";

const View = () => {
  const url =
    "https://1.bp.blogspot.com/-HmLPTJPVNyo/XXuV8MwJPNI/AAAAAAAAACs/J-XyG6EPoXoMAGK8bw5WpI8DRN_gUv_jwCEwYBhgL/s1600/jae-park-7GX5aICb5i4-unsplash.jpg";
  return (
    <div className="view__container">
      <div className="view__content">
        <CatPicture src={url} />
        <CatAbout />
      </div>
      <div className="view__carousel">
        <CatCarousel />
      </div>
    </div>
  );
};

export default View;
