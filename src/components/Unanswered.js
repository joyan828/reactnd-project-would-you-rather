import React, { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/formatter'
import { handleSaveAnswer } from '../actions/shared'

class Unanswered extends Component {
    state = {
        answerSelected: null
    }
    handleChange = (e) => {
        const {value} = e.target
        this.setState({answerSelected : value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, id, authedUser } = this.props
        const { answerSelected } = this.state

        if(answerSelected) {
            dispatch(handleSaveAnswer({
                qid: id,
                authedUser,
                answer: answerSelected
            }))
        } else {
            alert('Select the answer')
        }
    }
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
                value='optionOne'
                onChange={this.handleChange}
            />
            <label htmlFor='optionOne'>{optionOne.text}</label>
            <input 
                type='radio'
                name={id}
                value='optionTwo'
                onChange={this.handleChange}
            />
            <label htmlFor='optionTwo'>{optionTwo.text}</label>
            <button type='submit' onClick={this.handleSubmit}>Vote</button>
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
