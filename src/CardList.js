import React from 'react';
import Card from './Card';
// import {CardForm} from './CardForm';

const CardList = ({ id, items, name, cardClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( card => 
        <li 
          Card key={card.id} 
          complete={card.complete}
        > 
        <h1>{card.question}</h1> {card.answer}
        <br /> 
        <button 
          name="edit">Edit
        </button>
        <button 
          name="delete" 
          onClick= { (id) => this.props.cardClick }
        >Delete
        </button>
      </li>
  )}
    </ul>
  </div>
)
export default CardList;  