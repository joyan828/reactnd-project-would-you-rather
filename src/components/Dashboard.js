import { Component } from 'react';
import '../styles/App.css'
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        Dashboard
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
