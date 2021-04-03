import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './header/Nav'
import LoadingBar from 'react-redux-loading-bar'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import SignIn from './SignIn'
import SignUp from './SignUp'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
          <LoadingBar className='loading-bar'/>
          <main className="App">
            <Nav />
            { 
              this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/question/:id' component={QuestionPage}/>
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
              </div>  
            }
          </main>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    loading : authedUser === null
  }
}

export default connect(mapStateToProps)(App);
