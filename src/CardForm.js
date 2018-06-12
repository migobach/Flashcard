import React from 'react';

class CardForm extends React.Component {
  state = { card: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]:value })
    console.log(name)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.question, this.state.answer)
    console.log(this.state)
    this.setState({ question: '', answer: '' })
  }

  

  render() {
    const { card } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={card.question}
          name="question"
          onChange={this.handleChange}
          required 
          placeholder="Add a Question" 
        />
        <input
          value={card.answer}
          name="answer"
          onChange={this.handleChange}
          required
          placeholder="Add an Answer"
        />
        <input type="submit" />
      </form>
    )
  }
}

export default CardForm;