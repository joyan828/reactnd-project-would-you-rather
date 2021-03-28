import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './header/Nav'
import LoadingBar from 'react-redux-loading-bar'
import Dashboard from './question/Dashboard'
import QuestionPage from './question/QuestionPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
          <LoadingBar />
          <main className="App">
            <Nav />
            { 
              this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/question/:id' component={QuestionPage}/>
              </div>  
            }
          </main>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading : authedUser === null
  }
}

export default connect(mapStateToProps)(App);
