import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import PieChart from "../PieChart/PieChart";
import "./CatAbout.css";
import catData from "../utils/catData";

const CatAbout = () => {
  return (
    <div className="catAbout__container">
      <header className="catAbout__title">
        <h1>{catData.name}</h1>
      </header>
      <main className="catAbout__main">
        <div className="catAbout__about">
          <h3>About</h3>
          <section className="catAbout__characteristics">
            <span>
              <strong>Breed:</strong>
              {catData.breed}
            </span>
            <span>
              <strong>Origin:</strong>
              {catData.origin}
            </span>
            <span>
              <strong>Temperament:</strong>
              {catData.temperament[0]},{catData.temperament[1]}
            </span>
          </section>
          <section className="catAbout__ownership">
            <p className="catAbout__block">
              <strong>Location:</strong>
              <p>{catData.location}</p>
              <strong className="catAbout__medical">View medical record</strong>
            </p>

            <p className="catAbout__bio">
              <strong>Bio:</strong>
              {catData.bio}
            </p>
          </section>
        </div>
        <div className="catAbout__cat">
          <section className="catAbout__personality">
            <h3>Personality</h3>
            <label>Curious</label>
            <ProgressBar percentage={79} />
            <label>Friendly</label>
            <ProgressBar percentage={55} />
            <label>Energetic</label>
            <ProgressBar percentage={65} />
          </section>
          <section className="catAbout__activities">
            <h3>Average Day</h3>
            <PieChart />
          </section>
        </div>
      </main>
    </div>
  );
};

export default CatAbout;
