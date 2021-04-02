import { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from '../utils/formatter'
import Winner from '../images/medal.png'

class Leader extends Component {
    render() {
        const { rank, user, authedUser } = this.props
        const { id, name, avatarURL, scores } = user
        return (
            <li className={ id === authedUser ? 'leader selected' : 'leader' }>
                <div className='user-image'>
                    { rank === 1 && 
                        <span className='winner-mark'> 
                            <img 
                                src={Winner} 
                                alt='No.1 medal'
                            />
                        </span>
                    }
                    <img    
                        src= {avatarURL(id)}
                        alt= {`avatar of ${name}`}
                    />
                </div>
                <div className='user-info'>
                    <p className='name'>{name}</p>
                    <p className='id'>@{id}</p>
                    <ul>
                        <li>
                            <span className='text'>Answered Questions</span>
                            <span className='score'>{scores.answer}</span>
                        </li>
                        <li>
                            <span className='text'>Created Questions</span>
                            <span className='score'>{scores.question}</span>
                        </li>
                        {/* <li>
                            <span className='text'>Comments</span>
                            <span className='score'>{scores.answer}</span>
                        </li> */}
                    </ul>
                </div>
                <div className='user-score'>
                    <span>Score</span>
                    <span className='total'>{scores.total}</span>
                </div>
            </li>
        )
    }
}

function mapStateToProps ({ users, authedUser }, {id}) {
    const user = users[id]

    return {
        user : formatUser({user}),
        authedUser
    }
}

export default connect(mapStateToProps)(Leader);
