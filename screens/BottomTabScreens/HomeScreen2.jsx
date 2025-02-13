import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'



const HomeScreen2 = () => {

    const width = Dimensions.get('window').width;

    const images = [
        { id: 'The Two Towers', auth: 'J.R.R Tolkien', image: require("../../assets/img1.png") },
        { id: 'The Name of the Rose', auth: 'R.R Tojmre', image: require("../../assets/img2.jpg") },
        { id: 'The growth of the soil', auth: 'J.D Smith', image: require("../../assets/img3.jpg") }
    ]


    const carouselRef = React.useRef(null);

    // if (this._carousel) {
    //     this._carousel.snapToNext();
    // } else {
    //     console.error('Carousel ref is null or undefined');
    // }

    // if (this._carousel) {
    //     this._carousel.snapToPrev();
    // } else {
    //     console.error('Carousel ref is null or undefined');
    // }

    // const handleSnapToNext = () => {
    //     carouselRef.current.gotoNextSlide();
    // };

    // const handleSnapToPrev = () => {
    //     carouselRef.current.gotoPreviousSlide();
    // };

    return (
        <View style={styles.container}>

            <View style={styles.topCard}>
                <Image style={styles.topImg} source={require("../../assets/img2.jpg")} />
                <View style={styles.topView}>
                    <Text style={styles.t1}>The Name of the Rose</Text>
                    <Text style={styles.t2}>R.R Tojmre</Text>
                    <Text style={[styles.t2, {position: 'absolute', top: '73%', paddingLeft: 5}]}>Most Read</Text>
                    <Text style={styles.bottomText}>⭐⭐⭐⭐</Text>
                </View>
            </View>

            <Carousel
                ref={carouselRef}
                width={width}
                height={width / 0.5}
                data={images}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.CarouselItem}>
                            <Image style={styles.img} source={item.image} />
                            <Text style={styles.t1}>{item.id}</Text>
                            <Text style={styles.t2}>{item.auth}</Text>
                        </View>

                        <TouchableOpacity style={styles.arrowLeft}>
                            <View style={styles.arrowBox}><Ionicons name="arrow-back" size={30} color="black" /></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.arrowRight}>
                            <View style={styles.arrowBox}><Ionicons name="arrow-forward" size={30} color="black" /></View>
                        </TouchableOpacity>
                    </View>

                )

                }
            />
        </View>
    )
}

export default HomeScreen2

export const styles = StyleSheet.create({
    CarouselItem: {
        justifyContent: 'center',
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '87%',
        borderRadius: 10,
        marginBottom: 5
    },
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
        marginHorizontal: 40
    },
    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: "#F8F5F1",
        height: '100%'
        // flexDirection: 'row',


    },

    t1: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'

    },

    t2: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'regular'

    },

    arrowLeft: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: -25 }],
    },

    arrowRight: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -25 }],
    },

    arrowBox: {
        height: 35,
        width: 35,
        backgroundColor: '#F8F5F1',
        borderRadius: 10,
        opacity: 100,
        paddingLeft: 3
    },

    topCard: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10,
        height: '17%',
        // width: 250,
        alignItems: "start",
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent:'space-between',
        marginLeft: 0,
        marginBottom: 20,
    },

    topImg: {
        height: '100%',
        width: '25%',
        borderRadius: 5

    },
    topView: {
        flex: 1,
        height: '100%',
        width: 20,
        padding: 5,
    },

    bottomText: {
        position: 'absolute',
        top: '90%',
        marginLeft: 5,
    }
})