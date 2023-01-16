import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, useState } from 'react-native';

// Screens
import SignInScreen from './src/screens/SignInScreen/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen'
import InformationScreen from './src/screens/InformationScreen'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import CourseScreen from './src/screens/CourseScreen'
import OnBoardingScreen from './src/components/OnBoarding/OnBoardingScreen';

import { onAuthStateChanged } from 'firebase/auth'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons'

import CustomTabNavigator from './src/components/CustomTabNavigator/CustomTabNavigator';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {

    return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* <Stack.Screen options={{ headerShown: false }} name="CustomTabNavigator" component={CustomTabNavigator} /> */}
				<Stack.Screen options={{ headerShown:false }} name="OnBoarding" component={OnBoardingScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Login" component={SignInScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Register" component={SignUpScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Information" component={InformationScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Course" component={CourseScreen} />
			</Stack.Navigator>
		</NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default App;