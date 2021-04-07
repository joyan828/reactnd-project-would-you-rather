import React from 'react'
import { connect } from 'react-redux'
import { formatComment, formatDate } from '../../utils/formatter'
import { BiComment, BiLike } from 'react-icons/bi'
import { handleToggleComment } from '../../actions/comments'

function Comment (props) {
    const { name, id, timestamp, text, vote, avatar, likes, replies, hasLiked, isParent} = props.comment
    const { dispatch, authedUser, onClickReply } = props

    const handleLike = (e) => {
        e.preventDefault()
        dispatch(handleToggleComment({
            id,
            hasLiked,
            authedUser
        }))
    }

    return (
        <div className={isParent? 'comment' : 'comment child-comment'}>
            <div className={vote === 'optionOne' ? 'vote op-one' : 'vote op-two'}>
                <img    
                    src= {avatar}
                    alt= {`avatar of ${name}`}
                />
                <div className='vote-line'></div>
            </div>
            <div className='content'>
                <div className='user-info'>
                    <p className='user-name'>{name}</p>
                    <p className='date-created'>{formatDate(timestamp)}</p>
                </div>
                <div className='text'>
                    {text}
                </div>
                <div className='buttons'>
                    <button 
                        className={hasLiked ? 'like-button liked' : 'like-button'}
                        onClick={handleLike}
                    >
                        <BiLike /> {likes}
                    </button>
                    { isParent && 
                        <button onClick={onClickReply}>
                            <BiComment /> {replies}
                        </button> }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps ({ users, comments, authedUser }, {id}) {
    const { author } = comments[id]
    const comment = comments[id]
    const parentComment = comment.replyingTo

    return {
        comment : comment
            ? formatComment(comment, users[author], authedUser, parentComment)
            : null,
        authedUser
    }
}

export default connect(mapStateToProps)(Comment)