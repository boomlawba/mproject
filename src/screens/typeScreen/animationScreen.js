import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet,TouchableOpacity  } from 'react-native';
import ResultsDetail from '../../component/ResultDetail';
import { withNavigation } from 'react-navigation';

 class animationScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  static navigationOptions = {
    title: 'Animation',
  };
  

  componentDidMount(){
    return fetch('http://192.168.43.95:80/Movie_Project/type1.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false, 
          dataSource: responseJson,
         
        }, function(){
          console.log(responseJson);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    const {navigate} = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style = {styles.objectstyle}> 
            <TouchableOpacity
                onPress = {() => 
                  navigate('Detail',{name: item.name,image: item.image_url,
                    length: item.movie_length, rate: item.rating_movie,
                   directer: item.director, trailer: item.Trailer_url
                   , movie: item.Movie_url})}
            >
              <ResultsDetail result = {item}/>
              <Text style = {styles.textStyle}>
               {item.name}
              </Text>
  
              </TouchableOpacity>
          </View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    
   
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      textStyle:{
          marginLeft: 5,
          color: 'white'
      },
      objectstyle:{
        marginBottom: 10,
       
    },
    
      
});
 
export default withNavigation(animationScreen);