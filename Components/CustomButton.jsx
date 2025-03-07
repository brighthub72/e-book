import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = () => {
    return (
        
            <View>
                <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor || 'transparent', borderWidth: borderWidth || 0, borderColor: borderColor || 'transparent' }]} onPress={onPress} >
                    <Text style={[styles.textStyle, { color: textColor }]}>{title}</Text>
                </TouchableOpacity>
            </View>
        
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: 312,
        paddingVertical: 14,
        borderRadius: 5,
        marginTop: 10
    },
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})