import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'

const SignInScreen = () => {
	const {height} = useWindowDimensions()
	
	return (
		<View style={styles.root}>
			<Text style={styles.logo}>SignInScreen</Text>
			<CustomInput />
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
	},
	logo: {
		fontSize: 50,
		padding: 20,
		color: '#ffffff',
		fontWeight: 'bold',
	}
})

export default SignInScreen