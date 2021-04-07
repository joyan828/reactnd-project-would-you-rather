import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NewComment from './NewComment'
import CommentList from './CommentList'
import { LoaderSmallDots } from '../utils/Loader'

function CommentSection (props) {
    const { comments, totalComments, questionId, loading } = props

    return (
        <div>
            <NewComment 
                questionId={questionId}
            />
            <div className='comments-container'>
                <h4>Comments({totalComments})</h4>
                { totalComments > 0 
                    ? loading 
                        ? <LoaderSmallDots />
                        : <ul>
                            { comments.map((id)=> (
                                <CommentList 
                                    key={id}
                                    id={id}
                                />
                            ))}
                        </ul>
                    : null
                }
                    
            </div>
        </div>
    )
}

CommentSection.propTypes = {
    questionId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    totalComments: PropTypes.number,
}

function mapStateToProps ({ comments }, {questionId}) {
    const commentId = Object.keys(comments)
        .sort((a, b) => comments[a].timestamp - comments[b].timestamp)
    let parentsCommentId = [] 

    commentId.forEach((id) => {
        // which doesn't have its parent comment(i.e. not a reply)
        if ( comments[id].replies.length > 0 || comments[id].replyingTo === null) {
            parentsCommentId.push(id)
        }  
    })

    return {
        comments: parentsCommentId,
        questionId 
    }
}

export default connect(mapStateToProps)(CommentSection)