import { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'
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
    const { answeredId, unansweredId } = this.props
    const { tapIndex } = this.state

    return (
      <div className='dashboard'>
        <TabMenu 
          labels={['Answered Questions', 'Unanswered Questions']}
          value={tapIndex} 
          onhandleChange= {this.setTabIndex}
        />
        <TabPanel value={tapIndex} index={0}>
          {answeredId.map((id) => (
              <Answered 
                key= {id}
                id= {id} 
              />)
            )} 
          </TabPanel>
          <TabPanel value={tapIndex} index={1}>
            {unansweredId.map((id) => (
              <Unanswered 
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
