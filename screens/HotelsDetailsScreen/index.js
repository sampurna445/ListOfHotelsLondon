import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const HotelDetailsScreen = props => {
  const {hotelName, hotelAddress, hotelPhone, hotelWebsite} =
    props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textHeading}>Name:</Text>
        <Text> {hotelName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textHeading}>Address:</Text>
        <Text> {hotelAddress}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textHeading}>Phone:</Text>
        <Text> {hotelPhone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textHeading}>Website:</Text>
        <Text> {hotelWebsite}</Text>
      </View>
      <Text>: {}</Text>
    </View>
  );
};

export default HotelDetailsScreen;
