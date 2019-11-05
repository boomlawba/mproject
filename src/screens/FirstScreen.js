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
   navigationOptions = {
    title: 'Wellcome Mrec Hub ',
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);


  

  return (
    
    <ImageBackground source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRizjB-S5oh8HGyDuEAmwbZ1IrM8CsMu2L1n_sOanEt9jJ6fVLV"}} style={styles.wallpaper}>
  

    <SafeAreaView >
      <View >
    <ScrollView
        contentContainerStyle={styles.viewStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

<View style = {styles.viewicon}>
    <Image
    style = {styles.iconstyle}
    source={require('../image/icon/pronhub.png')}       
    />
 </View>
<View style = {styles.viewclickStyle}>
    <TouchableOpacity onPress={() => navigation.navigate('menu')}>
    <Text style={styles.textStyle}>Start  </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Alert.alert(
    'About me',
    'แอปพลิเคชั่นสำหรับดูข้อมูลหนังและซีรี่ที่หน้าสนใจในปัจจุบัน',
    [
      {text: 'See more', onPress:() => navigation.navigate('about')},
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
    </View>
    </ScrollView>
    </View>
    </SafeAreaView>
    </ImageBackground>


   );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:25 ,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  viewclickStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  viewicon: {
    borderColor: 'orange',
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,

  
  }
});

export default HomeScreen;