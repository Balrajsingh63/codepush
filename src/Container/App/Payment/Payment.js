import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RNUpiPayment from 'react-native-upi-payment';

const PaymentScreen = () => {
    const Payment = async () => {
        // const url =
        //   'upi://pay?pa=BHARATPE.8002223161@fbpe&pn=VAKEELSINGH&cu=INR&bpsign=ZE1tOUJTaENnUHllU0ZYMVhCWnlWemIzQ1BVOXlReURIcDBtaUZGa1ZEVT0=';
        // const supported = await Linking.canOpenURL(url);

        // if (supported) {
        //   // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        //   // by some browser in the mobile
        //   await Linking.openURL(url);
        // } else {
        //   Alert.alert(`Don't know how to open this URL: ${url}`);
        // }

        // vpa: 'ktb.xumeshshoo60090@icici',

        RNUpiPayment.initializePayment(
            {
                vpa: 'test555666@paytm.com', // or can be john@ybl or mobileNo@upi
                payeeName: 'Vakeel Singh',
                amount: 1,
                transactionRef: 'aasf-332-aoei-fa',
            },
            successCallback,
            failureCallback,
        );
    };

    function successCallback(data) {
        // do whatever with the data
        console.log('successCallback========', data);
        Alert.alert(data);
    }

    function failureCallback(data) {
        // do whatever with the data
        console.log('failureCallback=========', data);
        Alert.alert(data);
    }
    return (
        <View>
            <Button
                title="Press me"
                onPress={() => { Payment() }}
            />
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({})