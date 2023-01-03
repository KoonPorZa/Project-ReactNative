import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { auth } from '../../../firebase'
import { onAuthStateChanged } from 'firebase/auth';

const SignUpScreen = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordRepeat, setPasswordRepeat] = useState('')

	const onSignInPress = () => {
		console.warn("Sign in")
	}

	const onRegisterPress =() => {
		console.warn("onRegisterPress");
	}

	return (
		<View style={styles.root}>
			<Text style={styles.title}>Create an account</Text>
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
			<CustomInput
				placeholder="Repeat Password" 
				value={passwordRepeat} 
				setValue={setPasswordRepeat} 
				secureTextEntry
			/>
			<CustomButton
				text="Register" 
				onPress={onRegisterPress} 
			/>
			<CustomButton 
				text="Have an account? Sign in" 
				onPress={onSignInPress} 
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
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		margin: 10,
	}
})

export default SignUpScreen