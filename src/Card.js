import React from 'react'

const styles = {
  card: { cursor: 'pointer' },
  complete: { color:'grey', textDecoration: 'line-through' }
}

const Card = ({ id, question, answer, complete }) => (
    <li style={ complete ? {...styles.card, ...styles.complete } : styles.card }>
    {question}
    </li>
)

export default Card;