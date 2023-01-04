import { ScrollView, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import CustomButton from '../../components/CustomButton'
import { NavigationRouteContext } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {
  const onCoursePress = () => {
    // navigation.navigate('Course')
  }
  
  const onLoginPress = () => {
    // alert("Login Press")
    // navigation.navigate('Login')
  }
  return (
    <View style={styles.root}>
      <ScrollView>
        <CustomButton
          text="ดูหลักสูตร" 
          onPress={onCoursePress}
        />
        <CustomButton
          text="เข้าสู่ระบบ" 
          onPress={onLoginPress}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
		alignItems: 'center',
		padding: 20,
	},
  footer: {
    backgroundColor: 'red',
  }
})

