import React from 'react';
import './Home.css';

import Feed from '../../components/Feed/Feed';
import List from '../../components/List/List';

const Home = () => {
  return (
    <div className="home__content">
      <div>
        <Feed />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default Home;
