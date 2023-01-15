import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons'

// Screens
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import CourseScreen from '../../screens/CourseScreen'
import SignInScreen from '../../screens/SignInScreen/SignInScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const CustomTabNavigator = () => {

    return (
        <Tab.Navigator>
            {/* <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> */}
            <Tab.Screen options={{ headerShown: false }} name="Course" component={CourseScreen} />
            <Tab.Screen options={{ headerShown: false, tabBarStyle: {display: "none"} }} name="Login" component={SignInScreen} />
        </Tab.Navigator>
  )
}

export default CustomTabNavigator

const styles = StyleSheet.create({})