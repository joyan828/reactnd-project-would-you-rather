import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { handleSaveAnswer } from '../../actions/shared'

export default class Unanswered extends Component {
    state = {
        answerSelected: null,
        toHome: false
    }
    handleClick = (e) => {
        const {value} = e.target
        this.setState({answerSelected : value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, question, authedUser } = this.props
        const { answerSelected } = this.state
        if(answerSelected) {
            dispatch(handleSaveAnswer({
                qid: question.id,
                authedUser,
                answer: answerSelected
            }))
        } 
        this.setState(()=> ({
            toHome: true
        }))
    }
    
    render() {
        const { 
            author, timestamp, optionOne, optionTwo
        } = this.props.question
        if(this.state.toHome) {
            return <Redirect to='/'></Redirect>
        }

        return (
        <div className='answer-card container'>
            <div className='card-header-container'>
                <div className='questioner'>
                    <img 
                        src= { author.avatarURL }
                        alt= {`avatar of ${author.name}`}
                        className='avatar-img'
                    />
                    <p>
                        <span className='strong'>{author.name}</span> 
                        &nbsp;asks
                    </p>
                </div>
                <div className='point'>
                    Would you rather
                </div> 
                <div className='date-created'>{timestamp}</div>
            </div>
            
            <form className='answer-form' onSubmit={this.handleSubmit}>
                <button className='answer-button' type='submit' value='optionOne' onClick={this.handleClick}>
                    {optionOne.text}
                </button>
                <div className='middle-circle'>OR</div>
                <button className='answer-button' type='submit' value='optionTwo' onClick={this.handleClick}>
                    {optionTwo.text}
                </button>
            </form>
        </div>
        );
    }
}
    