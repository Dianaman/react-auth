import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	constructor(){
		super();
		this.state = {email:'', password:''};
	}

	render(){
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="user@mail.com"
						value={ this.state.email }
						onChangeText={ email => this.setState({ email }) }
					/>
				</CardSection>
				<CardSection>
					<Input 
						secureTextEntry
						label="Password"
						placeholder="Enter your password"
						value={ this.state.password }
						onChangeText={ password => this.setState({ password }) }
					/>
				</CardSection>
				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;