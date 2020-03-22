import React from 'react';
import { withFirebase } from '../../components/Firebase';

const SignOutButton = ({ firebase }) => (
    <a className="btn btn-primary" href="/" onClick={firebase.doSignOut}>
        Sign Out
    </a>
);
export default withFirebase(SignOutButton);