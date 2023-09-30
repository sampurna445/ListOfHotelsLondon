/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HotelsListScreen from './screens/HotelsListScreen';
import HotelDetailsScreen from './screens/HotelsDetailsScreen';
import AddHotelScreen from './screens/AddHotleScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HotelsList">
        <Stack.Screen
          name="HotelsList"
          component={HotelsListScreen}
          options={'Hotels List London'}
        />
        <Stack.Screen
          name="HotelsDetails"
          component={HotelDetailsScreen}
          options={'Hotel Details'}
        />
        <Stack.Screen
          name="AddHotel"
          component={AddHotelScreen}
          options={'Add New Hotel'}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
