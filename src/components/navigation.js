import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Logo from './assets/images/logo192.png'

function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Order A Coffee
                </Navbar.Brand>
                <Nav
                    activeKey="/"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/update-profile">Update Profile</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navigation