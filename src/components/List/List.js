import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./List.css";

const List = () => {
  const [catData, setCatData] = useState([]);

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
        setCatData(responseCatData.data);
      } catch (error) {
        if (error.response) {
          console.error("error.response: ", error.response);
        }
      }
    };
    getCatData();
  }, []);

  console.log("CatData: ", catData);

  return (
    <div className="list__container">
      <h2 className="list__title">CAT LIST</h2>
      <hr className="list__hr" />

      <ul className="list__list list__scroller">
        {catData.map(listItem => {
          return (
            <li key={listItem.id}>
              <a className="list__item-single" href={listItem.link}>
                <img
                  src="https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2019/05/cat.jpg"
                  width="100.62px"
                  height="82.47px"
                  alt="Grumpy Cat(sleep well sweet prince)"
                />
                <h3 className="list__item-title">{listItem.name}</h3>
                <span className="list__text">
                  Life Span: {listItem.life_span}
                </span>
                <span className="list__text">Origin: {listItem.origin}</span>
                <span className="list__text">
                  Temperament: {listItem.temperament}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
