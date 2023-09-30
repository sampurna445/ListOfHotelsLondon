import React from 'react';
import {Text, View} from 'react-native';

const HotelDetailsScreen = (route, navigation) => {
  // const navigation = useNavigation();
  // const hotel = navigation.getParam('hotel', {});

  // const {hotelName, hotelAddress, hotelPhone, hotelWebsite} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detials Page</Text>
      {/* <Text>Name: {hotelName}</Text>
      <Text>Address: {hotelAddress}</Text>
      <Text>Phone: {hotelPhone}</Text>
      <Text>Website: {hotelWebsite}</Text> */}
    </View>
  );
};

export default HotelDetailsScreen;
