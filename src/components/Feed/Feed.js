import React from "react";

import "./Feed.css";
import MockFeedData from "./MockFeedData";

const Feed = () => {
  return (
    <div className="feed__container">
      <h2 className="feed__title">CAT FEED</h2>
      <hr className="feed__hr" />
      <ul className="feed__list">
        {MockFeedData.map(feedItem => {
          return (
            <li className="feed__item" key={feedItem.title}>
              <a className="feed__text" href={feedItem.link}>
                {feedItem.title}{" "}
              </a>
              <strong className="feed__icon"> ></strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feed;
