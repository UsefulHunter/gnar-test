import React from "react";

import "./Feed.css";
import MockFeedData from "./MockFeedData";

const Feed = () => {
  return (
    <div className="Feed">
      <h2 className="Title">CAT FEED</h2>
      <ul>
        {MockFeedData.map(feedItem => {
          return (
            <li>
              <span>
                <a href={feedItem.link}>{feedItem.title} ></a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feed;
