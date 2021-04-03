import { Component } from 'react'
import { connect } from 'react-redux'
import Leader from './Leader'

class Leaderboard extends Component {
  render() {
    const { userId, maxScore } = this.props
    return (
      <section className='container'>
        <ul className='leader-list'>
            {userId.map((id) => (
                <Leader 
                    key={id}
                    id={id}
                    maxScore={maxScore}
                />
            ))}
        </ul>
      </section>
    );
  }
}

function mapStateToProps ({ users }) {
  const qnaLength = (index) => {
      return users[index].questions.length 
        + Object.keys(users[index].answers).length 
  }
  const userId = Object.keys(users)
    .sort((a, b) => (qnaLength(b) - qnaLength(a)))

  return {
    userId,
    maxScore: qnaLength(userId[0])
  }
}

export default connect(mapStateToProps)(Leaderboard);
