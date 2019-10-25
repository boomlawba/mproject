import React from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';

const FavouriteScreen = () => {
  return (
    <View style={styles.viewStyle}>
        
      <Text>หนังที่ชืนชอบ</Text>

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

export default FavouriteScreen;