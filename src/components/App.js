import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import PrivateRoute from './PrivateRouter'
import NotFound from './NotFound'

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
             <Switch>
                <PrivateRoute path='/' exact component={Dashboard}/>
                <PrivateRoute path='/question/:id' component={QuestionPage}/>
                <PrivateRoute path='/add' component={NewQuestion} />
                <PrivateRoute path='/leaderboard' component={Leaderboard} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route component={NotFound} />
              </Switch>  
          </main>
      </Router>
    );
  }
}

export default connect()(App);
