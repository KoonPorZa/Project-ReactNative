import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { auth } from '../../../firebase'
import { onAuthStateChanged } from 'firebase/auth';

const SignInScreen = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const {height} = useWindowDimensions()

	const onSignInPress = () => {
		console.warn("Sign in")
	}

	const onForgotPasswordPressed = () => {
		console.warn("Forgot Password Pressed")
	}

	const onSignUpPress =() => {
		console.warn("onSignUpPress");
	}

	return (
		<View style={styles.root}>
			<Text style={styles.header}>Sign In</Text>
			<CustomInput
				placeholder="Email"
				value={email}
				setValue={setEmail}
			/>
			<CustomInput
				placeholder="Password" 
				value={password} 
				setValue={setPassword} 
				secureTextEntry
			/>
			<CustomButton
				text="Sign In" 
				onPress={onSignInPress} 
			/>
			<CustomButton 
				text="Forgot Password?" 
				onPress={onForgotPasswordPressed} 
				type="TERTIARY" 
			/>
			<CustomButton 
				text="Don't have an account? Create one" 
				onPress={onSignUpPress} 
				type="TERTIARY" 
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 20,
	},
	header: {
		fontSize: 50,
		padding: 20,
		fontWeight: 'bold',
	}
})

export default SignInScreen