import { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'

class Dashboard extends Component {
  render() {
    const { answeredId, unansweredId } = this.props
    return (
      <div className="dashboard">
        Dashboard
        <ul>
          { answeredId.map((id) => (
            <Answered 
              key= {id}
              id= {id} 
            />
          ))}
          { unansweredId.map((id) => (
            <Unanswered 
              key= {id}
              id= {id} 
            />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  const questionId = Object.keys(questions)
  const answeredId = Object.keys(users[authedUser].answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredId = questionId.filter((id => !answeredId.includes(id)))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    answeredId,
    unansweredId
  }
}

export default connect(mapStateToProps)(Dashboard);
