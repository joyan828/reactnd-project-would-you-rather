import { Component } from 'react';
import '../styles/App.css'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
      { 
        this.props.loading === true
        ? <p>Loading...</p>
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
