import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../Container/Auth/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../../Container/Auth/Sigup/Sigup';
import Home from '../../Container/App/Home/Home';
import PaymentScreen from '../../Container/App/Payment/Payment';


const Stack = createStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Auth

const styles = StyleSheet.create({})