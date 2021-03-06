import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import catNames from "../utils/randomCatName";
import "./List.css";

const List = () => {
  let history = useHistory();
  const handleClick = () => history.push("/View");

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

      <table className="list__scroller">
        {completeCatList.map(listItem => {
          let tempArray = listItem.temperament.split(" ");
          console.log(tempArray);
          return (
            <tr className="list__row" key={listItem.id}>
              <td className="list__cell-image">
                <img
                  className="list__img"
                  src={listItem.url}
                  width="100.62px"
                  height="82.47px"
                  alt={`Name: ${listItem.catName}`}
                  onClick={handleClick}
                />
              </td>
              <td className="list__cell-title">
                <h4>{listItem.catName}</h4>
              </td>
              <td>
                <span className="list__text">
                  <strong>Breed:</strong> {listItem.name}
                </span>
              </td>
              <td>
                <span className="list__text">
                  <strong>Origin:</strong> {listItem.origin}
                </span>
              </td>
              <td>
                <span className="list__text">
                  <strong>Temperament:</strong> {tempArray[0]} {tempArray[1]}{" "}
                  ...
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default List;
