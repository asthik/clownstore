import React from 'react';
import './signIn.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    state = {
        email : "",
        password : ""
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"", password:""});
        }catch(error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name] : value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        value={this.state.email} 
                        label="email"
                        name="email" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                    type="password" 
                    value={this.state.password} 
                    label="password"
                    name="password" 
                    required 
                    handleChange = {this.handleChange}/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            {' '}Sign in with Google{' '}
                        </CustomButton>                    
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;