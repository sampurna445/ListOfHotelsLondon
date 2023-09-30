import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, Button} from 'react-native';

// Hotel data
const hotels = [
  {
    hotelName: 'St Giles Hotel, London',
    address: 'Bedford Avenue, London WC1B 3GH, UK',
    phone: '+44 20 7300 3000',
    website: 'www.stgiles.com',
  },
  {
    hotelName: 'Strand Palace Hotel, London',
    address: '372 Strand, London WC2R 0JJ, UK',
    phone: '+44 207 379 4737',
    website: 'www.strandpalacehotel.co.uk',
  },
  {
    hotelName: 'Ibis Styles London Excel',
    address: '272 Victoria Dock Road, London E16 3BY, United Kingdom',
    phone: '+44 2074740011',
    website: 'www.ibis.com',
  },
  {
    hotelName: 'The Queens Park Hotel, London',
    address: '48 Queensborough Terrace, London W2 3SJ',
    phone: '+44 20 7229 8080',
    website: 'www.queensparkhotel.com',
  },
  {
    hotelName: 'Hotel Olympia, London',
    address: '49 Earl’s Court Square, London SW5 9BY',
    phone: '+44 2073703419',
    website: 'hotelolympia.co.uk',
  },
  {
    hotelName: 'Hilton London Olympia',
    address: '380 Kensington High Street, London, W14 8NL, United Kingdom',
    phone: '+44 207-603-3333',
    website: 'www3.hilton.com',
  },
];

const HotelsListScreen = props => {
  const [hotelList, setHotelList] = useState(hotels); // Initializing with  initial hotel data

  useEffect(() => {}, []);

  // Function to add a new hotel to the list
  const addHotel = newHotel => {
    setHotelList(prevHotels => [...prevHotels, newHotel]);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={hotelList}
        keyExtractor={item => item.hotelName}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('HotelsDetails', {
                hotelName: item.hotelName,
                hotelAddress: item.address,
                hotelPhone: item.phone,
                hotelWebsite: item.website,
              });
            }}
            style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>{item.hotelName}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Add Hotel"
        onPress={() =>
          props.navigation.navigate('AddHotel', {
            onSave: addHotel, // Passing the addHotel function to the AddHotelScreen
          })
        }
      />
    </View>
  );
};

export default HotelsListScreen;
