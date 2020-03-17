import React from 'react'
import {Form, Button} from 'react-bootstrap'

export function UpdateProfile() {
    return(
        <Form>
            <h2 className="mt-5 mb-5">Update Profile</h2>
            <Form.Group>
                <Form.Label>Display Name</Form.Label>
                <Form.Control type='text' placeholder="Enter name"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile Number"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UpdateProfile()