import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { auth } from '../../../firebase'
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = ({ navigation }) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordRepeat, setPasswordRepeat] = useState('')

	const onSignInPress = () => {
		navigation.navigate('Login')
	}

	const onRegisterPress =() => {
		navigation.navigate('Information')
		// alert("Register")
	}

	// const handleSignUp = () => {
	// 	auth.createUserWithEmailAndPassword(email, password)
	// 	auth.then(userCredentials => {
	// 			const user = userCredentials.user
	// 			console.log(user.email);
	// 		})
	// 	auth.catch(error => alert(error.message))
	// }

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
				// onPress={handleSignUp} 
				onPress={onRegisterPress}
			/>
			<Text 
				style={styles.text} >
				Have an account? {''}
				<Text 
					style={styles.link}
					onPress={onSignInPress} >
					Sign in
				</Text>
			</Text>


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
	},
	text: {
		padding: 10,
		fontWeight: 'bold',
        color: 'gray',
	},
	link: {
		color: '#3b71f3'
	}
})

export default SignUpScreen