import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { Images } from '../../../assets/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppInput from '../../../Components/AppInput';
import AppButton from '../../../Components/AppButton';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';
import { showError, showSuccess } from '../../../Helper/Toast';
import { useDispatch } from 'react-redux'
import { setUser } from '../../../redux/Slice/Slice';


const SignUp = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState(false);

    const formData = {
        name: name,
        mobile: mobile,
        gender: gender,
        email: email,
        password: password,
    };

    const onSubmit = () => {
        if (checkValidation() == false) {
            return true;
        } else {
            dispatch(setUser(formData))
            navigation.navigate('Login', { userData: formData })
        }
    };

    const checkValidation = () => {
        if (name == '') {
            showError('Name is required');
            return false;
        } else if (mobile == '') {
            showError('Mobile is required');
            return false;
        } else if (gender == '') {
            showError('gender is required');
            return false;
        } else if (email == '') {
            showError('email is required');
            return false;
        } else if (password == '') {
            showError('password is required');
            return false;
        } else if (state == '') {
            showError('CheckBox is required');
            return false;
        }
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'rgba(240, 240, 242, 1)',
            }}>
            <ScrollView>
                <View style={{ flex: 1, }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={Images.Back}
                            style={{ marginTop: hp(2), marginLeft: wp(2) }}
                        />
                    </TouchableOpacity>
                    <View style={{ marginTop: hp(3), marginLeft: wp(3) }}>
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: '700',
                                color: 'rgba(31, 31, 57, 1)',
                            }}>
                            Sign Up
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'rgba(184, 184, 210, 1)',
                                marginBottom: hp(1),
                            }}>
                            Enter your details below & free sign up
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            padding: 15,
                            alignItems: 'center',
                            height: '100%',
                        }}>
                        <View style={{ marginVertical: hp(1) }}>
                            <Text>Your Name</Text>
                            <AppInput
                                style={styles.input}
                                onChangeText={value => {
                                    setName(value);
                                }}
                                value={name}
                                placeholder="Enter Name"
                            />
                        </View>
                        <View style={{ marginVertical: hp(1) }}>
                            <Text>Your Mobile</Text>
                            <AppInput
                                style={styles.input}
                                onChangeText={value => {
                                    setMobile(value);
                                }}
                                value={mobile}
                                placeholder="Enter Mobile"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{ marginVertical: hp(1) }}>
                            <Text>Your Gender</Text>
                            <AppInput
                                style={styles.input}
                                onChangeText={value => {
                                    setGender(value);
                                }}
                                value={gender}
                                placeholder="Enter Gender"
                            />
                        </View>
                        <View style={{ marginVertical: hp(1) }}>
                            <Text>Your Email</Text>
                            <AppInput
                                style={styles.input}
                                onChangeText={value => {
                                    setEmail(value);
                                }}
                                value={email}
                                placeholder="Enter Email"
                            />
                        </View>
                        <View>
                            <Text>Password</Text>
                            <AppInput
                                style={styles.input}
                                onChangeText={value => {
                                    setPassword(value);
                                }}
                                value={password}
                                placeholder="Enter Password"
                            />
                        </View>
                        <AppButton
                            style={styles.btn}
                            title="Create account"
                            titleStyle={styles.btnTitle}
                            onPress={onSubmit}
                        />
                        <View style={{ flexDirection: 'row', marginTop: hp(4) }}>
                            <CheckBox
                                onClick={() => {
                                    setState(!state);
                                }}
                                isChecked={state}
                            />
                            <Text style={{ paddingHorizontal: wp(2), width: wp(80) }}>
                                By creating an account you have to agree with our them &
                                condication.
                            </Text>
                        </View>
                        <Text style={{ marginTop: wp(4) }}>
                            Already have an account? Login
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    input: {
        width: wp(90),
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        height: hp(6),
    },
    btn: {
        width: wp(85),
        height: hp(6),
        backgroundColor: 'rgba(61, 92, 255, 1)',
        borderRadius: 10,
        marginTop: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
        fontSize: 18,
    },
});
