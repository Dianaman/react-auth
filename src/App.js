import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	constructor(){
		super();
		this.state = { loggedIn: null };
	}

	componentWillMount(){
		firebase.initializeApp({
		    apiKey: 'AIzaSyBr05wWi3j0ZmMBk91Ri2_lIFtEEOIX2KQ',
		    authDomain: 'react-auth-4b122.firebaseapp.com',
		    databaseURL: 'https://react-auth-4b122.firebaseio.com',
		    projectId: 'react-auth-4b122',
		    storageBucket: 'react-auth-4b122.appspot.com',
		    messagingSenderId: '180277480723'
	 	});

	 	firebase.auth().onAuthStateChanged((user) => {
	 		if(user){
	 			this.setState({loggedIn: true});
	 		} else {
	 			this.setState({loggedIn: false});
	 		}
	 	});
	}

	renderLogin(){
		switch(this.state.loggedIn){
			case true:
				return (
					<Card>
						<CardSection>
							<Button whenPress={()=>firebase.auth().signOut()}>
								Logout
							</Button>
						</CardSection>
					</Card>
				);

			case false:
				return <LoginForm/>;

			default:
				return (
					<Card>
						<CardSection>
							<Spinner />
						</CardSection>
					</Card>
				);
		}

	}

	render(){
		return (
			<View>
				<Header headerText="Authentication"/>
				{this.renderLogin()}
			</View>
		);
	}
}

export default App;