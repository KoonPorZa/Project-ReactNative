import { View, Text, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { auth, firebaseConfig } from '../../../firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { firebase } from '../../../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';

const SignInScreen = ({ navigation }) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const app = initializeApp(firebaseConfig)
	const auth = getAuth(app)

	const onSignInPress = () => {
		// alert('Sign In Pressed')
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user
			// alert("Login Complete")
			navigation.navigate('Course')
		})
		.catch(error => {
			alert(error.message)
		})
	}

	const onForgotPasswordPressed = () => {
		alert('Forgot Password Pressed')
	}

	const onSignUpPress =() => {
		navigation.navigate('Register')
	}

	// loginUser = async (email, password) => {
	// 	try {
	// 		await firebase.auth().signInWithEmailAndPassword(email, password)
	// 		navigation.navigate('Course')
	// 	} catch (error) {
	// 		alert(error.message + " <> " + email + password) 
	// 	}
	// }

	return (
		<KeyboardAvoidingView>
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
					// onPress={ () => loginUser(email, password) }
					type="PRIMARY"
				/>
				<Text 
					style={styles.text} >
					Forgot Password? {''}
					<Text 
						style={styles.link}
						onPress={onForgotPasswordPressed} >
						Click
					</Text>
				</Text>
				<Text 
					style={styles.text} >
					Don't have an account? {''}
					<Text 
						style={styles.link}
						onPress={onSignUpPress} >
						Create one
					</Text>
				</Text>

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

export default SignInScreen