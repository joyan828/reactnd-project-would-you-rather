import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import { handleAddComment } from '../../actions/shared'

class NewComment extends Component {
    state = {
        text: ''
    }
    handleChange = (e) => {
        const { value } = e.target
        this.setState(()=> ({
            text: value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, questionId, author, vote, parentCommentId, isReply } = this.props
        const { text } = this.state
        dispatch(handleAddComment({
            author, 
            text, 
            vote, 
            commentingTo: questionId, 
            replyingTo: parentCommentId 
                ? parentCommentId
                : null
        }))
        this.resetTextarea()
        
        if(isReply) {
            this.handleCancel()
        }
    }
    handleCancel = () => {
        const { onClickCancel } = this.props 
        onClickCancel()
        this.resetTextarea()
    }
    resetTextarea = () => {
        this.setState(()=> ({
            text: ''
        }))
    }
    render() {
        const { text } = this.state
        const { isReply } = this.props

        return (
            <div className='new-comment'>
                { isReply === true
                    ? <h4>Add reply</h4>
                    : <h4>New Comment</h4>
                }
                <form>
                    <textarea 
                        value={text}
                        onChange={this.handleChange}
                        className='comment-text'
                    />
                    <SubmitButton 
                        type='submit'
                        variant="contained"
                        disabled={text === ''}
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </SubmitButton>
                    { isReply === true && 
                        <CancelButton 
                            type='button'
                            variant="contained" 
                            onClick={this.handleCancel}
                        >
                            Cancel
                        </CancelButton>
                    }       
                </form>
            </div>
        )
    }
}

NewComment.propTypes = {
    questionId: PropTypes.string.isRequired,
    isReply: PropTypes.bool,
    parentCommentId: PropTypes.string,
    onClickCancel: PropTypes.func,
}

const SubmitButton = styled(Button)({
    height: '30px',
    marginLeft: '3px',
    backgroundColor: 'rgb(0, 192, 150)',
    "&:hover": {
        backgroundColor: 'rgb(0, 192, 150)'
    },
    color: '#fff'
})

const CancelButton = styled(Button)({
    height: '30px',
    marginLeft: '3px',
    backgroundColor: '#d3d3d3',
    "&:hover": {
        backgroundColor: '#d3d3d3'
    },
    color: '#666b6c'
})

function mapStateToProps ({ authedUser, users }, { questionId }) {
    const user = users[authedUser]
    const vote = user.answers[questionId]

    return {
        author: authedUser,
        vote
    }
}

export default connect(mapStateToProps)(NewComment)