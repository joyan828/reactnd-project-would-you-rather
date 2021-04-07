import React from 'react'
import { connect } from 'react-redux'
import NewComment from './NewComment'
import CommentList from './CommentList'

function CommentSection (props) {
    const { comments, totalComments, questionId } = props

    return (
        <section>
            <NewComment 
                questionId={questionId}
            />
            <article className='comments-container'>
                <h4>Comments({totalComments})</h4>
                <ul>
                    { comments.map((id)=> (
                        <CommentList 
                            key={id}
                            id={id}
                        />
                    ))}
                </ul>
            </article>
        </section>
    )
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
        totalComments: commentId.length,
        comments: parentsCommentId,
        questionId 
    }
}

export default connect(mapStateToProps)(CommentSection)