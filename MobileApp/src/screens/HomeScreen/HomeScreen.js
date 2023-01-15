import { ScrollView, StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from '../../components/CustomButton'
import { NavigationRouteContext } from '@react-navigation/native'

import CustomTabNavigator from '../../components/CustomTabNavigator/CustomTabNavigator'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons'

const HomeScreen = ({ navigation }) => {

  const Stack = createNativeStackNavigator()

  const onCoursePress = () => {
    navigation.navigate('Course')
  }
  
  const onLoginPress = () => {
    // alert("Login Press")
    navigation.navigate('Login')
  }

  return (
    <View style={styles.root}>
        <Text style={styles.title}>Home</Text>
        <CustomButton
          style={styles.footer}
          text="ดูหลักสูตร" 
          onPress={onCoursePress}
        />
        <CustomButton
          style={styles.footer}
          text="เข้าสู่ระบบ" 
          onPress={onLoginPress}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
		alignItems: 'center',
		padding: 20,
	},
  title: {
		fontSize: 50,
		padding: 20,
		fontWeight: 'bold',
  },
  footer: {

  }
})

export default HomeScreen