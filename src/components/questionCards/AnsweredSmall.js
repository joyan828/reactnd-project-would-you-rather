import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../../utils/formatter'
import { MineBadge } from '../utils/Badge'

function AnsweredSmall(props) {
    const isOptionOneSelected = () => {
        const { optionOne } = props.question
        return optionOne.votes.includes(props.authedUser) 
    }
    const { 
        id, author, optionOne, optionTwo, comments
    } = props.question
    const totalVote = optionOne.votes.length + optionTwo.votes.length

    return (
      <div className="answer-card-small">     
        <Link to={`/question/${id}`}>
            { author.id === props.authedUser &&
                <MineBadge />
            }  
            <div className='questioner'>
                <img 
                    src= { author.avatarURL }
                    alt= {`avatar of ${author.name}`}
                    className='avatar-img'
                />
                <p>
                    Asked by&nbsp;
                    <span className='strong'>{author.name}</span> 
                </p>
            </div>
            <div className='point'>
                Would you rather
            </div>
            <div className='text-field'>
                <p className='options'>
                    <span className={isOptionOneSelected() ? 'option selected' : 'option'}>
                        {optionOne.text} 
                    </span>
                    <span className='or'>OR</span>
                    <span className={isOptionOneSelected() ? 'option' : 'option selected'}>{optionTwo.text} </span>
                </p>
            </div>
            
            <p className='sub-info'>
                <span>Votes {totalVote}</span>
                <span>Comments {comments.length}</span>
            </p>
        </Link>
      </div>
    );
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

export default connect(mapStateToProps)(AnsweredSmall);
