import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../assets/images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppInput from '../../../Components/AppInput';
import AppButton from '../../../Components/AppButton';
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';
import { showError } from '../../../Helper/Toast';
import { addTodo } from '../../../redux/Action/Action';
import { useDispatch } from 'react-redux';

const Login = ({ route }) => {
    let { userData } = route.params
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = () => {
        if (checkValidation() == false) {
            return true;
        } else {
            dispatch(addTodo(userData));
            navigation.navigate('Home', { data: userData })
        }
    };

    const checkValidation = () => {
        if (email == '') {
            showError('email is required and valid');
            return false;
        } else if (password == '') {
            showError('password is required and valid');
            return false;
        } else {

        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(240, 240, 242, 1)' }}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.Back} style={{ marginTop: hp(2), marginLeft: wp(2) }} />
                </TouchableOpacity>

                <View style={{ marginTop: hp(3), marginLeft: wp(3) }}>
                    <Text style={{ fontSize: 25, fontWeight: '700', color: 'rgba(31, 31, 57, 1)' }}>
                        Log In
                    </Text>

                </View>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: 15, alignItems: 'center', height: '100%', marginTop: hp(3) }}>
                    <View style={{ marginVertical: hp(2) }}>
                        <Text>Your  Email</Text>
                        <AppInput style={styles.input} onChangeText={(value) => { setEmail(value) }} value={email} placeholder='Enter Email' />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <AppInput style={styles.input} onChangeText={(value) => { setPassword(value) }} value={password} placeholder='Enter Password' />
                    </View>
                    <AppButton style={styles.btn} title='Log In' titleStyle={styles.btnTitle} onPress={onSubmit} />
                    <Text style={{ alignSelf: 'flex-end', marginTop: hp(1) }}>Forget password?</Text>
                    <Text style={{ marginTop: wp(4) }}>Don’t have an account? Sign up</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        width: wp(90),
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        height: hp(6)
    },
    btn: {
        width: wp(85),
        height: hp(6),
        backgroundColor: 'rgba(61, 92, 255, 1)',
        borderRadius: 10,
        marginTop: hp(2),
        alignItems: 'center', justifyContent: 'center'
    },
    btnTitle: {
        color: 'white',
        fontSize: 18
    }
})