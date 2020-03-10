import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Feed from '../../components/Feed/Feed';
import List from '../../components/List/List';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="content">
        <Feed />
        <List />
      </section>
    </div>
  );
};

export default App;
