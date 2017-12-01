import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	constructor(){
		super();
		this.state = {
			email:'', 
			password:'', 
			error:'', 
			success: '', 
			loading: false};
	}

	onButtonPress(){
		this.setState({
			loading: true,
			error: '',
			success: ''
		});
		const { email, password } = this.state;

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then((data) => {
			this.onLoginSuccess('Logged as existing user.');
		})
		.catch((error) => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((data) => {
				this.onLoginSuccess('Signed and logged as new user.');
			})
			.catch((error) => {
				this.onLoginFail('Authentication Failed: '+ error);
			});
		})
	}

	renderButton(){
		if(this.state.loading){
			return <Spinner size="small"/>;
		}

		return (
			<Button whenPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		)
	}

	onLoginSuccess(message) {
		this.setState({email:'', password: '', loading:false, success: message})
	}

	onLoginFail(error) {
		this.setState({loading:false, error: error})
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

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<Text style={styles.successTextStyle}>
					{this.state.success}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	successTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'green'
	}
}

export default LoginForm;