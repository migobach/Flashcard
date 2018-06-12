import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import CardForm from './CardForm';

class App extends Component {

  state = {
    cards: [
      {id: 1, question: "What is React?", answer: "Difficult, but worthwhile", complete: false},
      {id: 2, question: "How are things organized?", answer: "There is no answer at this time.", complete: false},
      {id: 3, question: "How do we do this?", answer: "The world may never know.", complete: false},

    ]
  }

  // init = () => {
  //   debugger
  //   // this.name.child.onClick() = (e) => this.deleteCard(e) 
  // }

  getUniqId = () => {
    return Math.floor(( 1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  addItem = (question, answer) => {
    const { cards } = this.state
    const card = { id: this.getUniqId(), question, answer }
    this.setState({ cards: [card, ...cards] })
  }

  handleClick = (id) => {
    const { cards } = this.state
    this.setState({
      cards: cards.map( card => {
        if (card.id === id) {
          return {
            ...card,
            complete: !card.complete
          }
        }

        return card
      })
    })
  }

  // deleteCard = (e) => {
  //   const card = this.target
  //   const id = this.card.data().id
  //   const { cards } = this.state 
  //   this.state.cards = cards.filter( c => c.id !== id )
  //   debugger
  // }

  // editCard = (card, e) => {
  //   if ( this.state.editing ) {
  //     this.state.editing = false
  //     card.question.val()
  //     card.answer.val()
  //     debugger 
  //   } else {

  //   }
  // }

  render() {
    const { cards } = this.state
    debugger

    return (
      <div>
        <CardForm addItem={this.addItem} />
        <CardList name="Flashcards" items={cards} cardClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
