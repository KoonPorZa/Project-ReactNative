import { View, Text, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
// import { auth, firebaseConfig } from '../../../firebase'
import { onAuthStateChanged, UserCredential } from 'firebase/auth'
import { firebase } from '../../../firebase'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../firebase'

const LoginTest = ({ navigation }) => {

	// Login 
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const app = initializeApp(firebaseConfig)
	const auth = getAuth(app)

	const onRegisterPress =() => {
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user
			alert("Register Complete")
		})
		.catch(error => {
			alert(error.message)
		})
	}
	const onLoginPress = () => {
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user
			alert("Login Complete")
		})
		.catch(error => {
			alert(error.message)
		})
	}

	return (
		<KeyboardAvoidingView>
			<View style={styles.root}>
				<Text style={styles.header}>Login Test</Text>
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
					text="Login" 
					onPress={onLoginPress} 
					// onPress={ () => loginUser(email, password) }
					type="PRIMARY"
				/>
				<CustomButton
					text="Register" 
					onPress={onRegisterPress} 
					// onPress={ () => loginUser(email, password) }
					type="PRIMARY"
				/>

			</View>
		</KeyboardAvoidingView>
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

export default LoginTest