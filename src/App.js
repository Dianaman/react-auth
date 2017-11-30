import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
		    apiKey: 'AIzaSyBr05wWi3j0ZmMBk91Ri2_lIFtEEOIX2KQ',
		    authDomain: 'react-auth-4b122.firebaseapp.com',
		    databaseURL: 'https://react-auth-4b122.firebaseio.com',
		    projectId: 'react-auth-4b122',
		    storageBucket: 'react-auth-4b122.appspot.com',
		    messagingSenderId: '180277480723'
		  });
	}

	render(){
		return (
			<View>
				<Header headerText="Authentication"/>
				<LoginForm/>
			</View>
		);
	}
}

export default App;