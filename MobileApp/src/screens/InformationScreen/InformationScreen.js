import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { auth } from '../../../firebase'
import { onAuthStateChanged } from 'firebase/auth';

const InformationScreen = () => {

	const [imgprofile, setImgprofile] = useState('')
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [career, setCareer] = useState('')
	const [birthdate, setBirthdate] = useState('')
	const [address, setAddress] = useState('')
	const [province, setProvince] = useState('')
	const [district, setDistrict] = useState('')
	const [subdistrict, setSubdistrict] = useState('')
	const [postalnumber, setPostalnumber] = useState('')
	const [agency, setAgency] = useState('')
	const [status, setStatus] = useState('')


	const onSignInPress = () => {
		console.warn("Sign in")
	}

	const onRegisterPress =() => {
		console.warn("onRegisterPress");
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Information</Text>
				<CustomInput
					placeholder="ImgProfile"
					value={imgprofile}
					setValue={setImgprofile}
				/>
				<CustomInput
					placeholder="First name"
					value={firstname}
					setValue={setFirstname}
				/>
				<CustomInput
					placeholder="Last name" 
					value={lastname} 
					setValue={setLastname} 
				/>
				<CustomInput
					placeholder="Career" 
					value={career} 
					setValue={setCareer} 
				/>
				<CustomInput
					placeholder="BirthDate" 
					value={birthdate} 
					setValue={setBirthdate} 
				/>
				<CustomInput
					placeholder="Address" 
					value={address} 
					setValue={setAddress} 
				/>
				<CustomInput
					placeholder="Province"
					value={province} 
					setValue={setProvince} 
				/>
				<CustomInput
					placeholder="District"
					value={district} 
					setValue={setDistrict} 
				/>
				<CustomInput
					placeholder="Subdistrict"
					value={subdistrict} 
					setValue={setSubdistrict} 
				/>
				<CustomInput
					placeholder="Postalnumber"
					value={postalnumber} 
					setValue={setPostalnumber} 
				/>
				<CustomInput
					placeholder="Agency"
					value={agency} 
					setValue={setAgency} 
				/>
				<CustomInput
					placeholder="Status"
					value={status} 
					setValue={setStatus} 
				/>
				<CustomButton
					text="Register" 
					onPress={onRegisterPress} 
				/>

			</View>
		</ScrollView>
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

export default InformationScreen