import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { component: Component, isAuthed, ...rest } = props
    return <Route {...rest} render={props => (
        isAuthed
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )} />
}

function mapStateToProps ({ authedUser }) {
    return {
        isAuthed : authedUser !== null,
    }
}

export default connect(mapStateToProps)(PrivateRoute)