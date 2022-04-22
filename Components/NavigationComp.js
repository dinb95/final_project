import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './Home';
import Map from './Map';
import SearchRoute from './SearchRoute';
import ProfileScreen from '../screens/ProfileScreen';
import Prediction from './Prediction/Prediction';
import AlarmClock from '../screens/AlarmClock';
import UserLocation from './UserLocation';
import ChatScreen from '../screens/ChatScreen';
import ChatMenu from '../screens/ChatMenu';
import Instructions from './Bus Instructions/Instructions';
import PredParams from './Prediction/PredParams';

export default function NavigationComp() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search Route" component={SearchRoute}/>
      <Stack.Screen name="Prediction Process" component={Prediction}/>
      <Stack.Screen name="Map" component={Map} options={{headerShown:true}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="AlarmClock" component={AlarmClock} />
      <Stack.Screen name="UserLocation" component={UserLocation} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatMenu" component={ChatMenu} />
      <Stack.Screen name="Instructions" component={Instructions}/>
      <Stack.Screen name="Prediction Parameters" component={PredParams} />
    </Stack.Navigator>
  )
}