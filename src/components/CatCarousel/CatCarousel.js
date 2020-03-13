import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./CatCarousel.css";

const CatItem = props => {
  let history = useHistory();
  const handleClick = () => history.push("/View");
  return (
    <div>
      <img
        onClick={handleClick}
        className="catCarousel__item"
        src={props.src}
        alt="some cats to watch"
      />
    </div>
  );
};

const CatCarousel = () => {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const getCatData = async () => {
      try {
        api.defaults.headers.common = {
          "x-api-key": `2c9c74c1-97f6-418d-aa12-06c0810e2905`
        };
        let responseCatImages = await api.get("/images/search", {
          params: {
            limit: 15
          }
        });
        setCatImages(responseCatImages.data);
      } catch (error) {
        if (error.response) {
          console.error("Error.response: ", error.response);
        }
      }
    };
    getCatData();
  }, []);

  return (
    <main className="catCarousel__main">
      <h1 className="catCarousel__title">SEE MORE CATS</h1>
      <div className="catCarousel__container">
        {catImages.map(item => {
          return <CatItem src={item.url} />;
        })}
      </div>
    </main>
  );
};

export default CatCarousel;
