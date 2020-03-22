import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Logo from './assets/images/logo192.png'
import SignOutButton from "../routes/signout";
import { AuthUserContext } from '../components/Session';

const Navigation = () => (
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
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </Navbar>
);

const NavigationAuth = () => (
    <Nav onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
            <Nav.Link href="/update-profile">Update Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/home">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/orders">Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <SignOutButton/>
        </Nav.Item>
    </Nav>

);
const NavigationNonAuth = () => (
    <Nav onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
            <Nav.Link href="/signup"> Sign Up </Nav.Link>
        </Nav.Item>
    </Nav>
);

export default Navigation
