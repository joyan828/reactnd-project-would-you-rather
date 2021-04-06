import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

function CommentList (props) {
    const { parentCommentId, childComments } = props
    return (
        <li className='comments-list'>
            <Comment 
                id={parentCommentId}
            />
            {
                childComments.map((childId) => (
                    <Comment 
                        key={childId}
                        id={childId}
                    />
                ))
            }
        </li>
    )
}

function mapStateToProps ({ comments }, {id}) {
    const childComments = comments[id].replies

    return {
        parentCommentId: id,
        childComments
    }
}

export default connect(mapStateToProps)(CommentList)