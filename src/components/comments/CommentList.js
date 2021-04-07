import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import NewComment from './NewComment'

class CommentList extends Component {
    state = {
        show : false
    }
    toggleReply = () => {
        this.setState(()=> ({
            show: !this.state.show
        }))
    }
    render() {
        const { show } = this.state
        const { questionId, parentCommentId, childComments } = this.props

        return (
            <li className='comments-list'>
                <Comment 
                    id={parentCommentId}
                    onClickReply={this.toggleReply}
                />
                {
                    childComments.map((childId) => (
                        <Comment 
                            key={childId}
                            id={childId}
                        />
                    ))
                }
                { show === true && 
                    <NewComment 
                        questionId={questionId}
                        isReply={true}
                        parentCommentId={parentCommentId}
                        onClickCancel={this.toggleReply}
                    />
                }
            </li>
        )
    }
    
}

function mapStateToProps ({ comments }, {id}) {
    const childComments = comments[id].replies
        .sort((a, b) => comments[a].timestamp - comments[b].timestamp)

    const questionId = comments[id].commentingTo
    return {
        parentCommentId: id,
        childComments,
        questionId
    }
}

export default connect(mapStateToProps)(CommentList)