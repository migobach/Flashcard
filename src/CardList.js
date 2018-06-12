import React from 'react';
import Card from './Card';
// import {CardForm} from './CardForm';

const CardList = ({ items, name }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( card => <li Card key={card.id}> <h1>{card.question}</h1> {card.answer} </li> )}
    </ul>
  </div>
)
export default CardList;  