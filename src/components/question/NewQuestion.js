import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../../actions/shared'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }
    handleSubmit = async(e) => {
        e.preventDefault()
        const { dispatch, history } = this.props
        const result = await dispatch(handleAddQuestion(this.state))

        // Move to home page only when error hasn't occured during the api request 
        result === true && history.push('/')
    }
    render() {
        const { optionOneText, optionTwoText } = this.state
        
        return (
            <section className='box shadow container'>
                <h3>Create New question</h3>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <p className='title-text'>Would you rather...</p>
                    <MyTextField 
                        autoFocus
                        label='Enter option one text here'
                        variant='outlined'
                        name='optionOneText'
                        value={optionOneText}
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <MyTextField 
                        label='Enter option two text here'
                        variant='outlined'
                        name='optionTwoText'
                        value={optionTwoText}
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <SubmitButton 
                        type='submit'
                        variant="contained" 
                        color="primary"
                        disabled={optionOneText === '' || optionTwoText === ''}
                        fullWidth
                    >
                        Submit
                    </SubmitButton>
                </form>
            </section>
        )
    }
}

const MyTextField = styled(TextField)({
    margin: '10px 0'
});
 
const SubmitButton = styled(Button)({
    margin: '20px 0',
    height: '60px'
});

export default withRouter(connect()(NewQuestion))
