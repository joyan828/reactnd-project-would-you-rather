import { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/formatter'

class Answered extends Component {
    isOptionOneSelected() {
        const { optionOne } = this.props.question
        return optionOne.votes.includes(this.props.authedUser) 
    }
  render() {
    const { 
        id, author, timestamp, optionOne, optionTwo
    } = this.props.question
    const totalVote = optionOne.votes.length + optionTwo.votes.length
        
    return (
      <div className="answer-card unanswered">
        <img 
            src= { author.avatarURL() }
            alt= {`avatar of ${author.name}`}
            className='avatar-img'
        />
        <p>asked by {author.name} </p>
        <span>{formatDate(timestamp)}</span>
        <p>Result: Would you rather...</p>
        <div className={this.isOptionOneSelected()? 'option selected' : 'option'}>
            <p>{optionOne.text}</p>
            <span>{optionOne.votes.length} out of {totalVote}</span>
        </div>
        <div className={this.isOptionOneSelected()? 'option' : 'option selected'}>
            <p>{optionTwo.text}</p>
            <span>{optionTwo.votes.length} out of {totalVote}</span>
        </div>
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

export default connect(mapStateToProps)(Answered);
