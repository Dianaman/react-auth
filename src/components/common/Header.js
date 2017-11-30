import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#E8E8E8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8
	},
	textStyle: {
		fontSize: 20
	}
};

export { Header };
