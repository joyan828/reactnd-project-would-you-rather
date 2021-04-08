import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NewComment from './NewComment'
import CommentList from './CommentList'
import { handleReceiveData, resetComment } from '../../actions/comments'
import { LoaderSmallDots } from '../utils/Loader'

class CommentSection extends Component {
    state = {
        loading: false 
    }
    componentDidMount() {
        const { dispatch, questionId, totalComments } = this.props

        dispatch(resetComment())

        // fetch comments data only needed to minimize ajax call
        if ( totalComments >  0) {
            this.setState({loading: true})
            
            dispatch(handleReceiveData(questionId))
                .then(()=> 
                    this.setState({loading: false})
                )
        }  
    }
    render () {
        const { comments, totalComments, questionId } = this.props
        const { loading } = this.state

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
}

CommentSection.propTypes = {
    questionId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    totalComments: PropTypes.number,
}

function mapStateToProps ({ comments }) {
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
        comments: parentsCommentId
    }
}

export default connect(mapStateToProps)(CommentSection)