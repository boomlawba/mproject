import React from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity,Image,  ScrollView,
  RefreshControl, SafeAreaView,Alert, ImageBackground } from 'react-native';

import WallPaperManager from 'react-native-wallpaper-enhanced';
import Constants from 'expo-constants';


function wait(timeout) {
  return new Promise(resolve => { 
    setTimeout(resolve, timeout);
  });
}

const HomeScreen = ({navigation}) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);


  

  return (
    
    <ImageBackground source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu9FWaKQsPt3ediAoN0-xEGw3ikkMvsirkew7PJFdHD4UnNiKI"}} style={styles.wallpaper}>
  

    <SafeAreaView >
      <View >
    <ScrollView
        contentContainerStyle={styles.viewStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >


    <Image
    style = {styles.iconstyle}
    source={require('../image/icon/pronhub.png')}       
    />
 

    <TouchableOpacity onPress={() => navigation.navigate('menu')}>
    <Text style={styles.textStyle}>Start  </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Alert.alert(
    'About me',
    'แอปพลิเคชั่นสำหรับดูข้อมูลหนังและซีรี่ที่หน้าสนใจในปัจจุบัน',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  )}>
    <Text style={styles.textStyle}>About me   </Text>
    </TouchableOpacity>

    </ScrollView>
    </View>
    </SafeAreaView>
    </ImageBackground>


   );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:30 ,
    color: 'grey',
    fontWeight: 'bold',
  },
  iconstyle: {
    width: 300,
    height: 300
  } ,
  wallpaper:{
    backgroundColor: 'black',
  
    width: '100%',
    height: '100%'
  }
  ,
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  }
});

export default HomeScreen;