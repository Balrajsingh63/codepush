import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AppButton = ({ style, title, titleStyle, onPress }) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    // btn: {
    //     width: wp(85),
    //     height: hp(6),
    //     backgroundColor: 'rgba(61, 92, 255, 1)',
    //     borderRadius: 10,
    //     marginTop: hp(2),
    //     alignItems: 'center', justifyContent: 'center'
    // }
})