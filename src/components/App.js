import React, { Component } from 'react';
import '../styles/App.css'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <div className="App">
        <LoadingBar />
        { 
          this.props.loading === true
          ? null
          : <Dashboard />
        }
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading : authedUser === null
  }
}

export default connect(mapStateToProps)(App);
