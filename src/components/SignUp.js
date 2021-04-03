import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import { handleAddUser } from '../actions/users'
import { IdInput, PasswordInput, NameInput } from './utils/Input'

class SignUp extends Component {
    state = {
        id: '',
        name: '',
        password: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }
    resetValue = (e) => {
        const { name } = e.target
        this.setState(() => ({
            [name]: ''
        }))
    }
    handleSubmit = async(e) => {
        e.preventDefault()
        const { dispatch, history } = this.props
        const result = await dispatch(handleAddUser(this.state)) 
        result && history.push('/')
    }

    render() {
        const { id, name, password } = this.state
        return (
            <section className='box shadow container'>
                <h3>Create your account</h3>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <IdInput 
                        id={id} 
                        handleChange={this.handleChange}
                        validation={true}
                        resetValue={this.resetValue}
                    />
                    <PasswordInput 
                        password={password}
                        handleChange={this.handleChange}
                        validation={true}
                        resetValue={this.resetValue}
                    />
                    <NameInput 
                        name={name}
                        handleChange={this.handleChange}
                        validation={true}
                        resetValue={this.resetValue}
                    />
                    <SubmitButton 
                        type='submit'
                        variant="contained" 
                        color="primary"
                        disabled={id === '' || password === '' || name === ''}
                        fullWidth
                    >
                        Sign Up
                    </SubmitButton>
                </form>
            </section>
        )
    }
}

const SubmitButton = styled(Button)({
    margin: '20px 0',
    height: '60px'
});

export default withRouter(connect()(SignUp))
