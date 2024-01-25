import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Container/App/Home/Home';
const Stack = createStackNavigator();

const App = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default App

const styles = StyleSheet.create({})