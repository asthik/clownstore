import React from 'react';
import './signUp.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';

class SignUp extends React.Component{
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );
            await createUserProfileDocument( user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name] : value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with email and pssword</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                      type="text"
                      name="displayName"
                      value={displayName}
                      label="Display Name"
                      required
                      handleChange={this.handleChange} />
                    <FormInput
                      type="text"
                      name="email"
                      value={email}
                      label="Email"
                      required
                      handleChange={this.handleChange} />
                    <FormInput
                      type="password"
                      name="password"
                      value={password}
                      label="Password"
                      required
                      handleChange={this.handleChange} />
                    <FormInput
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      label="Confirm Password"
                      required
                      handleChange={this.handleChange} />
                <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;