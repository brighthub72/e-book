import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const booksListScreen = () => {

    const images = [
        { id: 'The Two Towers', auth: 'J.R.R Tolkien', image: require("../assets/img1.png") },
        { id: 'The Name of the Rose', auth: 'R.R Tojmre', image: require("../assets/img2.jpg") },
        { id: 'The growth of the soil', auth: 'J.D Smith', image: require("../assets/img3.jpg") }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.scrollContainer}
                data={images}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.listContainer}>
                                <Image style={styles.topImg} source={item.image} />
                                <View style={styles.topView}>
                                    <Text style={styles.t1}>{item.id}</Text>
                                    <Text style={styles.t2}>{item.auth}</Text>
                                </View>


                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={<View style={{ height: 0.5, backgroundColor: 'grey' }} />}
            />
        </View>
    )
}

export default booksListScreen

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginVertical: 16
    },

    scrollContainer: {
        maxHeight: '100%'
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

    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: "#F8F5F1",
        height: '100%'
        // flexDirection: 'row',


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
})