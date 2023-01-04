import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import InformationScreen from './src/screens/InformationScreen'
import HomeScreen from './src/screens/HomeScreen'

// import LoginScreen from './screentest/LoginScreen'
// import HomeScreen from './screentest/HomeScreen'

// const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<SafeAreaView style={styles.root}>
			<SignInScreen />
			{/* <SignUpScreen /> */}
			{/* <InformationScreen /> */}
			{/* <HomeScreen /> */}
		</SafeAreaView>

		// <NavigationContainer>
		// 	<Stack.Navigator>
		// 		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		// 		<Stack.Screen name="HomeScreen" component={HomeScreen} />
		// 	</Stack.Navigator>
		// </NavigationContainer>

	)
}

export default App;