import * as React from 'react';
import { SafeAreaView, StyleSheet, useState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from './src/screens/SignInScreen/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen'
import InformationScreen from './src/screens/InformationScreen'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import CourseScreen from './src/screens/CourseScreen'
import LoginTest from './src/screens/LoginTest'

import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator()

const App = () => {

    return (

        <NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Login" component={SignInScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Register" component={SignUpScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Information" component={InformationScreen} />
				<Stack.Screen name="Course" component={CourseScreen} />
                {/* <Stack.Screen name="Login" component={LoginTest} /> */}
            </Stack.Navigator>
		</NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default App;