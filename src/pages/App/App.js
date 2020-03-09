import React from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import Feed from "../../components/Feed/Feed";

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="content">
        <Feed />
      </section>
    </div>
  );
};

export default App;
