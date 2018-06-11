import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import CardForm from './CardForm';

class App extends Component {

  state = {
    cards: [
      {id: 1, question: "What is React?", answer: "Difficult, but worthwhile"},
      {id: 2, question: "How are things organized?", answer: "There is no answer at this time."},
    ]
  }

  getUniqId = () => {
    return Math.floor(( 1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  addItem = (question) => {
    const { cards } = this.state
    const card = { id: this.getUniqId(), question }
    this.setState({ cards: [card, ...cards] })
  }

  render() {
    const { cards } = this.state

    return (
      <div>
        <CardForm addItem={this.addItem} />
        <CardList name="Flashcards" items={cards} />
      </div>
    );
  }
}

export default App;
