import { logInUser, logOutUser } from '../utils/api'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function handleLoginUser ({id, password}) {
    return (dispatch) => {
        return logInUser({id, password})
            .then ((id) => {
                if(id) {
                    dispatch(setAuthedUser(id))
                    return true
                } else {
                    throw new Error('invalid')
                } 
            })
            .catch((e)=> {
                if(e.message === 'invalid') {
                    alert('Please check your id or password.')
                } else {
                    console.warn(`Error in handleLoginUser `, e)
                    alert('There was an error logging in. Try again.')
                }
            })
    }
}

export function removeAuthedUser (id) {
    return {
        type: REMOVE_AUTHED_USER,
        id
    }
}


export function handleLogoutUser (id) {
    return (dispatch) => {
        return logOutUser(id)
            .then ((id) => {
                dispatch(removeAuthedUser(id)
            )
            .catch((e)=> {
                console.warn(`Error in handleLogoutUser `, e)
                alert('There was an error logging out. Try again.')
            })
        })
    }
}


