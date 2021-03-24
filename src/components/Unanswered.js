import { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/formatter'


class Unanswered extends Component {
  render() {
    const { 
        id, author, timestamp, optionOne, optionTwo
    } = this.props.question

    return (
      <div className="answer-card answered">
        <img 
            src= { author.avatarURL() }
            alt= {`avatar of ${author.name}`}
            className='avatar-img'
        />
        <p>{author.name} asks...</p>
        <span>{formatDate(timestamp)}</span>
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
    return {
        question : question
            ? formatQuestion({
                question, 
                author : users[question.author]
            })
        : null, 
        authedUser,
    }
}

export default connect(mapStateToProps)(Unanswered);
