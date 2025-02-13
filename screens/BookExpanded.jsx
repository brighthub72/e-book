import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButton'



const BookExpanded = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.img} source={require("../assets/img2.jpg")} />
                <Text style={styles.t1}>The Name of the Rose</Text>
                <Text style={styles.t2}>R.R Tojmre | 1992</Text>
            </View>

            <CustomButton
                
                // title={"Continue"}
                // textColor={"white"}
                // backgroundColor={"#007B5D"}
                // style={styles.buttonContainer}
                // // buttonStyle={styles.buttonStyle}
            />
        </View>
    )
}

export default BookExpanded

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10,
        height: 400,
        width: 250,
        justifyContent: 'center',
        marginHorizontal: 40,
        alignItems: 'center'
    },

    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: "#F8F5F1",
        height: '100%'
        // flexDirection: 'row',


    },

    img: {
        width: '80%',
        height: '70%',
        borderRadius: 10,
        marginBottom: 15
    },

    t1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10

    },

    t2: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'regular'

    },

    buttonContainer: {
        position: "absolute",
        paddingHorizontal: 20,
        bottom: 30,
        // backgroundColor : 'red',
        padding: 10,
    },

    buttonStyle: {
        width: '50%'
      }
})