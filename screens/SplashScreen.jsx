import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/logo.png')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  img: {
    width: 163,
    height: 153,
  },

  container: {
    backgroundColor: '#F8F5F1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
})