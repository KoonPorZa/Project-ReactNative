import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const SignInScreen = () => {
	return (
		<View style={styles.root}>
			<Text style={styles.logo}>สร้างบัญชี</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
	},
	logo: {
		fontSize: 70,
		padding: 20,
		color: '#ffffff',
		fontWeight: 'bold',
	}
})

export default SignInScreen