import React from 'react'
import '../../styles/App.css'
import '../../styles/header.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props){
     // Todo : move to my page 

    // const { id, avatarURL, name } = props
   
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'> 
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' exact activeClassName='active'> 
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leader' exact activeClassName='active'> 
                        Leader Board
                    </NavLink>
                </li>
                <li>
                    {/* { name &&
                    <NavLink to='/mypage' exact activeClassName='active'> 
                       <span> Hello, {name}
                       <img 
                            src= { avatarURL() }
                            alt= {`avatar of ${name}`}
                            className='avatar-img'
                        />
                       </span>
                    </NavLink>
                    } */}
                </li>
            </ul>
        </nav>
    )
}

function mapStateToProps({ authedUser, users }) {
    // if( authedUser !== null ) {
    //     const user = users[authedUser]
    //     const { id, avatarURL, name } = user
    //     return {
    //         id, 
    //         avatarURL, 
    //         name 
    //     }
    // }
}

export default connect(mapStateToProps)(Nav)