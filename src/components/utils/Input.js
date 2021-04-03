import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { styled } from '@material-ui/core/styles'
import { idValidation, passwordValidation, nameValidation } from '../../utils/validator'

export function IdInput({id, handleChange, validation=false, resetValue }) {
    const [idError, setIdError] = useState(false)
    const [idErrorMessage, setIdErrorMessage] = useState('')

    let errorMessage = 'Id should be 4 to 10 characters long and can contains alphabets and numbers.'
    const handleValidation = (e, id, errorMessage) => {
        if(idValidation(id) === false) {
            resetValue(e)
            setIdError(true)
            setIdErrorMessage(errorMessage)
        } else {
            setIdError(false)
            setIdErrorMessage('')
        }
    }

    return (
        <MyTextField 
            error={idError}
            helperText={idErrorMessage}
            autoFocus
            label='Enter your ID'
            variant='outlined'
            name='id'
            value={id}
            onChange={handleChange}
            onBlur={(e)=> validation && handleValidation(e, id, errorMessage)}
            fullWidth
        />
    )
}

IdInput.propTypes = {
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    validation: PropTypes.bool,
    resetValue: PropTypes.func,
};

export function PasswordInput({password, handleChange, validation=false, resetValue }) {
    const [passwordError, setPasswordError] = useState(false)
    const [idErrorMessage, setIdErrorMessage] = useState('')
    let errorMessage = 'Password should be 6 to 16 characters long and can contains alphabets and numbers.'

    const handleValidation = (e, password, errorMessage) => {
        if(passwordValidation(password) === false) {
            resetValue(e)
            setPasswordError(true)
            setIdErrorMessage(errorMessage)
        } else {
            setPasswordError(false)
            setIdErrorMessage('')
        }
    }

    return (
        <MyTextField 
            error={passwordError}
            helperText={idErrorMessage}
            label='Enter your password'
            type='password'
            variant='outlined'
            name='password'
            value={password}
            onChange={handleChange}
            onBlur={(e)=> validation && handleValidation(e, password, errorMessage)}
            fullWidth
        />
    )
}

PasswordInput.propTypes = {
    password: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    validation: PropTypes.bool,
    resetValue: PropTypes.func,
};

export function NameInput({name, handleChange, validation=false, resetValue}) {
    const [nameError, setNameError] = useState(false)
    const [nameErrorMessage, setNameErrorMessage] = useState('')
    let errorMessage = 'Name should be 2 to 10 characters long and can contains alphabets.'

    const handleValidation = (e, name, errorMessage) => {
        if(nameValidation(name) === false) {
            resetValue(e)
            setNameError(true)
            setNameErrorMessage(errorMessage)
        } else {
            setNameError(false)
            setNameErrorMessage('')
        }
    }

    return (
        <MyTextField 
            error={nameError}
            helperText={nameErrorMessage}
            label='Enter your name'
            variant='outlined'
            name='name'
            value={name}
            onChange={handleChange}
            onBlur={(e)=> validation && handleValidation(e, name, errorMessage)}
            fullWidth
        />
    )
}

NameInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    validation: PropTypes.bool,
    resetValue: PropTypes.func,
};

const MyTextField = styled(TextField)({
    margin: '10px 0'
});
 