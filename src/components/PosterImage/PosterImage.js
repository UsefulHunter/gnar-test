import React from 'react';
import './PosterImage.css';

const PosterImage = () => {
  const url =
    'https://i0.wp.com/gatomainecoon.com.br/wp-content/uploads/2020/03/curiosidades-sobre-gatos-the-lucky-neko-2JcixB1Ky3I-unsplash.jpg?fit=1200%2C675&ssl=1';
  return (
    <main className="posterImage__main">
      <h1 className="posterImage__title">
        Help Make a<br /> Purrrfect Match
      </h1>
      <div className="posterImage_purple-filter"></div>
      <img className="posterImage__image" src={url} alt="some cat" />
    </main>
  );
};

export default PosterImage;
