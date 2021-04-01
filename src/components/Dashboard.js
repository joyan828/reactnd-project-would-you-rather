import { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredCard from './questionCards/UnansweredSmall'
import AnsweredCard from './questionCards/AnsweredSmall'
import { TabMenu, TabPanel } from './utils/Tap'

class Dashboard extends Component {
  state = {
    tapIndex: 1
  }

  setTabIndex = (index) => {
    this.setState(()=> ({
      tapIndex: index
    }))
  }
  
  render() {
    const { answeredQid, unansweredQid } = this.props
    const { tapIndex } = this.state

    return (
      <section className='container'>
        <TabMenu 
          labels={['Answered Questions', 'Unanswered Questions']}
          value={tapIndex} 
          onhandleChange= {this.setTabIndex}
        />
        <TabPanel className='list-container' value={tapIndex} index={0}>
          {answeredQid.map((id) => (
              <AnsweredCard 
                key= {id}
                id= {id} 
              />)
            )} 
          </TabPanel>
          <TabPanel className='list-container' value={tapIndex} index={1}>
          {unansweredQid.map((id) => (
            <UnansweredCard 
              key= {id}
              id= {id} 
            />
          ))}
        </TabPanel>
      </section>
    );
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  const questionId = Object.keys(questions)
  const answeredQid = Object.keys(users[authedUser].answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredQid = questionId.filter((id => !answeredQid.includes(id)))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    answeredQid,
    unansweredQid
  }
}

export default connect(mapStateToProps)(Dashboard);
