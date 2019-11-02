import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstScreen from './src/screens/FirstScreen';
import MenuScreen from './src/screens/MenuScreen';
import GenresScreen from './src/screens/GenresScreen';
import MovieScreen from './src/screens/MovieScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import SearchScreen from './src/screens/SearchScreen';
import animationScreen from './src/screens/typeScreen/animationScreen';
import actionScreen from './src/screens/typeScreen/actionScreen';
import comadyScreen from './src/screens/typeScreen/comadyScreen';
import serieScreen from './src/screens/typeScreen/serieScreen';
import testScreen from './src/screens/testScreen';
import MovieDetail from './src/screens/MovieDetail';

const navigator = createStackNavigator (
  {
    first: FirstScreen,
    menu: MenuScreen,
    genres: GenresScreen,
    movie: MovieScreen,
    favourite: FavouriteScreen,
    search: SearchScreen,
    anime: animationScreen,
    Detail: MovieDetail,
    action: actionScreen,
    serie: serieScreen,
    comady: comadyScreen,
    test: testScreen
  },
  {
    initialRouteName: 'first',
    defaultNavigationOptions:
    {
     
    }
  }

);
export default createAppContainer(navigator);
