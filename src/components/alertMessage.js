import React from 'react'
import {Alert} from "react-bootstrap";

class AlertMessage extends React.Component {
    render() {
        return (
            <Alert variant={this.props.variant}>{this.props.message}</Alert>
        )
    }
}

export default AlertMessage