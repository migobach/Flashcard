import React from 'react';

class CardForm extends React.Component {
  state = { card: '' }

  handleChange = (e) => {
    this.setState({ card: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.card)
    // this.addItem(this.state.card)
    // this.setState({ card: '' })
  }

  

  render() {
    const { card } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={card.question}
          card="card"
          onChange={this.handleChange}
          required 
          placeholder="Add a Question" 
        />
        <input
          value={card.answer}
          card="card"
          onChange={this.handleChange}
          required
          placeholder="Add an Answer"
        />
        <button>Submit</button>

      </form>
    )
  }
}

export default CardForm;