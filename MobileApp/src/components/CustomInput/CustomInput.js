import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
				valye={value}
				onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
				secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        paddingHorizontal: 7,
        borderRadius: 6,
        marginVertical: 10,
    },
    input: {

    },
})

export default CustomInput