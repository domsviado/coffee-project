import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios"

const INITIAL_STATE = {
    displayName: '',
    email: '',
    password: '',
    phoneNumber: '',
    redirect: false,
};

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };


    handleSubmit = event => {
        const {displayName, email, password, phoneNumber} = this.state;
        event.preventDefault();
        try {
            axios.post(
                process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_SERVER_PORT + '/api/' + process.env.REACT_APP_SERVER_API_VERSION + '/customers/create',
                {
                    email: email,
                    password: password,
                    display_name: displayName,
                    phone_number: phoneNumber
                }).then(response => this.setState({redirect:true}));
        } catch (e) {
           console.log(e)
        }
    };

    render() {
        const {displayName, email, password, phoneNumber, redirect} = this.state;


        if (redirect) {
            return <Redirect to='/'/>;
        }

        return (
            <Form onSubmit={this.handleSubmit}>
                <h2 className="mt-5 mb-2">Sign Up</h2>
                <Form.Group>
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control type='text' placeholder="Enter name" name="displayName" value={displayName}
                                  onChange={this.handleChange}/>
                    <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email}
                                  onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="was-validated" type="password" placeholder="Password" name="password" value={password}
                                  onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="phoneNumber" value={phoneNumber}
                                  onChange={this.handleChange} />
                    <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default SignUpForm