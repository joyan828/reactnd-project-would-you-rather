import { Component } from 'react'
import '../../styles/App.css'
import { connect } from 'react-redux'
import UnansweredQCard from './UnansweredQuestionSmall'
import AnsweredQCard from './AnsweredQuestionSmall'
import { TabMenu, TabPanel } from '../utils/Tap'

class Dashboard extends Component {
  state = {
    tapIndex: 0
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
      <div className='container'>
        <TabMenu 
          labels={['Answered Questions', 'Unanswered Questions']}
          value={tapIndex} 
          onhandleChange= {this.setTabIndex}
        />
        <TabPanel className='grid-container margin-top-20' value={tapIndex} index={0}>
          {answeredQid.map((id) => (
              <AnsweredQCard 
                key= {id}
                id= {id} 
              />)
            )} 
          </TabPanel>
          <TabPanel className='grid-container margin-top-20' value={tapIndex} index={1}>
            {unansweredQid.map((id) => (
              <UnansweredQCard 
                key= {id}
                id= {id} 
              />
            ))}
          </TabPanel>
      </div>
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
