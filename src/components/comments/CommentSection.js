import React from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'

function CommentSection (props) {
    const { comments } = props
    return (
        <section>
            <div>
                <h3>New Comment</h3>
                <textarea style={{width: '100%', height: '60px'}}/>
            </div>
            <article className='comments-container'>
                <h3>Comments</h3>
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

function mapStateToProps ({ comments }) {
    const commentId = Object.keys(comments)
    let parentsCommentId = [] 

    commentId.forEach((id) => {
        // which doesn't have its parent comment
        if ( comments[id].replies.length > 0 || comments[id].replyingTo === null) {
            parentsCommentId.push(id)
        }  
    })

    return {
        comments: parentsCommentId
    }
}

export default connect(mapStateToProps)(CommentSection)