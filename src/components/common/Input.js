import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input  = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{ label }</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				style={inputStyle}
				autoCorrect={false}
				value={ value }
				onChangeText={ onChangeText }
			/>
		</View>
	)
}

const styles = {
	inputStyle: {
		fontSize:18,
		flex:2
	},
	labelStyle: {
		fontSize:18,
		flex:1,
		paddingLeft:20
	},
	containerStyle:{
		flex:1,
		display:'flex',
		flexDirection: 'row',
		alignItems: 'center'
	}
}

export { Input };