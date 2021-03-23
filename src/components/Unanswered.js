import { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/formatter'


class Unanswered extends Component {
  render() {
        const { 
            id, optionOne, optionTwo, author 
        } = this.props.question
        const avatarURL = author.avatarURL()

    return (
      <div className="answer-card unanswered">
        <img 
            src= { avatarURL }
            alt= {`avatar of ${author.name}`}
            width= {'100px'}
        />
        <span>{author.name} asks...</span>
        <p>Would you rather...</p>
        <input 
            type='radio'
            name={id}
            value={optionOne.text}
            defaultChecked
        />
        <label htmlFor={optionOne.text}>{optionOne.text}</label>
        <input 
            type='radio'
            name={id}
            value={optionTwo.text}
        />
        <label htmlFor={optionTwo.text}>{optionTwo.text}</label>
        <button type='submit'>Vote</button>
      </div>
    );
  }
}

function mapStateToProps ({ questions, users, authedUser }, { id }) {
    const question = questions[id]
    const { optionOne, optionTwo } = question
    return {
        question : question
        ? formatQuestion({
            optionOneText : optionOne.text, 
            optionTwoText: optionTwo.text, 
            author : users[authedUser]
        })
        : null
    }
}

export default connect(mapStateToProps)(Unanswered);
