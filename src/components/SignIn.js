import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import { IdInput, PasswordInput } from './utils/Input'
import { handleLoginUser } from '../actions/authedUser'

class SignIn extends Component {
    state = {
        id: '',
        password: ''
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
        const result = await dispatch(handleLoginUser(this.state)) 
        result && history.push('/')
    }

    render() {
        const { id, password } = this.state
        return (
            <section className='box shadow container'>
                <h3>Log in</h3>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <IdInput 
                        id={id} 
                        handleChange={this.handleChange}
                    />
                    <PasswordInput 
                        password={password}
                        handleChange={this.handleChange}
                    />
                    <SubmitButton 
                        type='submit'
                        variant="contained" 
                        color="primary"
                        disabled={id === '' || password === ''}
                        fullWidth
                    >
                        Sign In
                    </SubmitButton>
                </form>
                <div className='link-signup'>
                    <span>Don't have an account?</span>&nbsp;
                    <Link to={'/signup'}>Sign up Now!</Link>
                </div>
            </section>
        )
    }
}

const SubmitButton = styled(Button)({
    margin: '20px 0',
    height: '60px'
});

export default withRouter(connect()(SignIn))
