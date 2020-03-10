import React from 'react';

import './List.css';

const catGetData = [
  {
    link: 'https://cat.com',
    name: 'Cat name',
    age: 3,
    favoriteActivity: 'Eating',
    petPeave: 'Hairballs'
  }
];

const List = () => {
  return (
    <div className="list__container">
      <h2 className="list__title">CAT LIST</h2>
      <hr />

      <ul className="list__list">
        {catGetData.map(listItem => {
          return (
            <li className="list__item">
              <a className="list__item-single" href={listItem.link}>
                <img
                  src="https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2019/05/cat.jpg"
                  width="100.62px"
                  height="82.47px"
                  alt="Grumpy Cat(sleep well sweet prince)"
                />
                <h3>Fluffly Jenkins</h3>
                <span>Age: 3 years</span>
                <span>Favorite Activity: eating</span>
                <span>Pet peave: Hairballs</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
