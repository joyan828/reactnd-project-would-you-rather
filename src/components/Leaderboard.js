import { Component } from 'react'
import { connect } from 'react-redux'
import Leader from './Leader'

class Leaderboard extends Component {
  render() {
    const { userId } = this.props
    return (
      <section className='container'>
        <ul className='leader-list'>
            {userId.map((id, index) => (
                <Leader 
                    key={id}
                    id={id}
                    rank={index + 1}
                />
            ))}
        </ul>
      </section>
    );
  }
}

function mapStateToProps ({ users }) {
    const qnaLength = (index) => {
        return users[index].questions.length + Object.keys(users[index].answers).length 
    }

    return {
        userId: Object.keys(users)
            .sort((a, b) => qnaLength(b) - qnaLength(a))
    }
}

export default connect(mapStateToProps)(Leaderboard);
