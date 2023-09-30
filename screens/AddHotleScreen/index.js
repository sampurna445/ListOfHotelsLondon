import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const AddHotelScreen = ({navigation, route}) => {
  const [hotelName, setHotelName] = useState('');
  const [hotelAddress, setHotelAddress] = useState('');
  const [hotelPhone, setHotelPhone] = useState('');
  const [hotelWebsite, setHotelWebsite] = useState('');

  // Regular expressions for phone number and website validation
  const phoneRegex = /^[0-9]{10}$/; // Matches a 10-digit phone number
  const websiteRegex = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,4}$/i; // Matches a basic website URL

  const onAddHotel = () => {
    // Validating the phone number and website before adding to the new hotel object
    if (!phoneRegex.test(hotelPhone)) {
      alert('Invalid phone number. Please enter a 10-digit number.');
      return;
    }

    if (!websiteRegex.test(hotelWebsite)) {
      alert('Invalid website URL. Please enter a valid URL.');
      return;
    }

    // Creating a new hotel object
    const newHotel = {
      hotelName: hotelName,
      address: hotelAddress,
      phone: hotelPhone,
      website: hotelWebsite,
    };

    // Passing the new hotel obj back to the HotelListScreen
    route.params.onSave(newHotel);

    // Navigating back to the HotelListScreen
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <TextInput
        placeholder="Hotel Name"
        value={hotelName}
        onChangeText={setHotelName}
      />
      <TextInput
        placeholder="Address"
        value={hotelAddress}
        onChangeText={setHotelAddress}
      />
      <TextInput
        placeholder="Phone"
        value={hotelPhone}
        onChangeText={setHotelPhone}
      />
      <TextInput
        placeholder="Website"
        value={hotelWebsite}
        onChangeText={setHotelWebsite}
      />
      <Button title="Add Hotel" onPress={onAddHotel} />
    </View>
  );
};

export default AddHotelScreen;
