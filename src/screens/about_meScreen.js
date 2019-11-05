import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

const about_meScreen = () => {
  return (
    <View >
       <Text style = {styles.textStyle}>รายละเอียดแอปพลิเคชัน</Text>
       <View style={styles.viewdetail} >
        <Text>ชื่อแอปพลิเคชั่น: Mrec Hub</Text>
         <Text>ระบบปฏิบัติการที่รองรับ: android</Text>
         <Text>ฟังก์ชัน</Text>
         <Text>1: คัดสรรหนังและซีรี่ที่น่าสนใจมาให้ลือกชม</Text>
         <Text>2: มีลิงค์ตัวอย่างหนังและซีรี่ที่สนใจ</Text>
         <Text>3: มีลิงค์ดูหนังและซีรี่ที่สนใจ</Text>
      </View>

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
  } ,
  viewdetail: {
    borderColor: 'black',
    borderTopWidth: 6,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,

  
  }
});

export default about_meScreen;