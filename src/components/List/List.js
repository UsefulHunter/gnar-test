import React, { useEffect, useState } from "react";
import api from "../../services/api";
import catNames from "../utils/randomCatName";
import "./List.css";

const List = () => {
  const [catData, setCatData] = useState([]);
  const [catImages, setCatImages] = useState([]);
  let completeCatList = [];

  useEffect(() => {
    const getCatData = async () => {
      try {
        api.defaults.headers.common = {
          "x-api-key": `2c9c74c1-97f6-418d-aa12-06c0810e2905`
        };
        let responseCatData = await api.get("/breeds", {
          params: {
            limit: 15
          }
        });
        let responseCatImages = await api.get("/images/search", {
          params: {
            limit: 15
          }
        });
        setCatData(responseCatData.data);
        setCatImages(responseCatImages.data);
      } catch (error) {
        if (error.response) {
          console.error("error.response: ", error.response);
        }
      }
    };
    getCatData();
  }, []);

  console.log("CatData: ", catData);
  completeCatList = catData.map((x, idx) => {
    return { ...x, ...catNames[idx], ...catImages[idx] };
  });
  console.log(
    "%c Complete Cat List:",
    "color: tomato; font-weight: bold; background-color: black;"
  );
  console.table(completeCatList);

  return (
    <div className="list__container">
      <h2 className="list__title">CAT LIST</h2>
      <hr className="list__hr" />

      <ul className="list__list list__scroller">
        {completeCatList.map(listItem => {
          return (
            <li className="list__item-single" key={listItem.id}>
              <img
                className="list__img"
                src={listItem.url}
                width="100.62px"
                height="82.47px"
                alt={`Name: ${listItem.catName}`}
              />
              <h3 className="list__item-title">{listItem.catName}</h3>
              <span className="list__text">
                <strong>Breed:</strong> {listItem.name}
              </span>
              <span className="list__text">
                <strong>Origin:</strong> {listItem.origin}
              </span>
              <span className="list__text-temperament">
                <strong>Temperament:</strong> {listItem.temperament}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
