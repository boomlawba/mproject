import React from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Welcome </Text>

      <Button title="Start" onPress={() => navigation.navigate('menu')}/>

    </View>
   );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  }
});

export default HomeScreen;