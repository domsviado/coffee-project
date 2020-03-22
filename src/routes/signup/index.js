import React from 'react'
import { FirebaseContext } from '../../components/Firebase';
import SignUpForm from "./signupForm";

class SignUp extends React.Component {
    render () {
        return (
            <FirebaseContext.Consumer>
                {firebase => <SignUpForm firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}

export default SignUp