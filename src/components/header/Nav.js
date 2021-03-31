import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoaderSmallDots } from '../utils/Loader'

function Nav(props){
    const { isLoading } = props

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
                        <NavLink to='/leader' exact activeClassName='active'> 
                            Leader Board
                        </NavLink>
                    </li>
                    <li className='userName'>
                        { isLoading 
                        ? <LoaderSmallDots />
                        : <span> Hello, {props.name}
                                <img 
                                    src= { props.avatarURL(props.id) }
                                    alt= {`avatar of ${props.name}`}
                                    className='avatar-img'
                                />
                            </span>
                        }
                        <NavLink to='/logout' exact> 
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function mapStateToProps({ authedUser, users }) {
    const isLoading = authedUser === null

    if(isLoading) {
        return { 
            isLoading
        }
    } else {
        const user = users[authedUser]
        const { id, avatarURL, name } = user
        return {
            isLoading,
            id, 
            avatarURL, 
            name 
        }
    }
}

export default connect(mapStateToProps)(Nav)