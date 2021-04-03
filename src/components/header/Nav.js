import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../../actions/authedUser'

function Nav(props){
    const { isAuthed, dispatch } = props
    const handleLogout = (id) => {
        dispatch(removeAuthedUser(id))
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'> 
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'> 
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'> 
                            Leader Board
                        </NavLink>
                    </li>
                    <li className='userName'>
                        { isAuthed 
                        ? <>
                                <span> Hello, {props.name}
                                    <img 
                                        src= { props.avatarURL }
                                        alt= {`avatar of ${props.name}`}
                                        className='avatar-img'
                                    />
                                </span>
                                <span 
                                    className='logout'
                                    onClick={handleLogout}
                                > 
                                    Logout
                                </span>
                            </>
                        : <Link to='/signin'>
                            <span className='login'>Sign In</span>
                        </Link>
                        }
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function mapStateToProps({ authedUser, users }) {
    const isAuthed = authedUser !== null 
    if(isAuthed) {
        const user = users[authedUser]
        const { id, avatarURL, name } = user
        return {
            isAuthed,
            id, 
            avatarURL, 
            name 
        }
    } else {
        return { 
            isAuthed
        }
    }
}

export default connect(mapStateToProps)(Nav)