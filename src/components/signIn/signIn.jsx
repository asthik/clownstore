import React from 'react';
import './signIn.scss';
import FormInput from '../formInput/formInput';
import CustomButtons from '../customButton/customButton';

class SignIn extends React.Component {
    state = {
        email : "",
        password : ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:"", password:""})
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
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
                    <CustomButtons type="submit">Sign In</CustomButtons>
                </form>
            </div>
        );
    }
}

export default SignIn;