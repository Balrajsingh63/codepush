import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AppInput = ({ style, onChangeText, value, placeholder, keyboardType }) => {
    return (
        <>
            <TextInput
                style={style}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </>
    )
}

export default AppInput

const styles = StyleSheet.create({})