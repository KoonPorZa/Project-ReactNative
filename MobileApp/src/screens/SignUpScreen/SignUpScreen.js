import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SignUpScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.logo}>SignUpScreen</Text>
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

export default SignUpScreen