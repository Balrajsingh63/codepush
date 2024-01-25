import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ data }) => {
    console.log("datatata", data)
    let user_Data = data?.text
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{user_Data?.name}</Text>
            <Text style={styles.title}>{user_Data?.email}</Text>
            <Text style={styles.title}>{user_Data?.mobile}</Text>
            <Text style={styles.title}>{user_Data?.gender}</Text>
            <Text style={styles.title}>{user_Data?.password}</Text>
        </View>
    )

}

const Home = ({ route }) => {
    const tasks = useSelector((state) => state.taskReducer.tasks);
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Images.Back} style={{ marginTop: hp(2), marginLeft: wp(2) }} />
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: wp(95),
        // height: hp(9),
        marginTop: hp(2),
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title: {
        fontSize: 20,
    },
});