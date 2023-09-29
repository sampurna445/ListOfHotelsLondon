import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';

// Hotel data
const hotels = [
  {
    name: 'St Giles Hotel, London',
    address: 'Bedford Avenue, London WC1B 3GH, UK',
    phone: '+44 20 7300 3000',
    website: 'www.stgiles.com',
  },
  {
    name: 'Strand Palace Hotel, London',
    address: '372 Strand, London WC2R 0JJ, UK',
    phone: '+44 207 379 4737',
    website: 'www.strandpalacehotel.co.uk',
  },
  {
    name: 'Ibis Styles London Excel',
    address: '272 Victoria Dock Road, London E16 3BY, United Kingdom',
    phone: '+44 2074740011',
    website: 'www.ibis.com',
  },
  {
    name: 'The Queens Park Hotel, London',
    address: '48 Queensborough Terrace, London W2 3SJ',
    phone: '+44 20 7229 8080',
    website: 'www.queensparkhotel.com',
  },
  {
    name: 'Hotel Olympia, London',
    address: '49 Earl’s Court Square, London SW5 9BY',
    phone: '+44 2073703419',
    website: 'hotelolympia.co.uk',
  },
  {
    name: 'Hilton London Olympia',
    address: '380 Kensington High Street, London, W14 8NL, United Kingdom',
    phone: '+44 207-603-3333',
    website: 'www3.hilton.com',
  },
];

const HotelsListScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={hotels}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <TouchableOpacity
            // onPress={() => navigation.navigate('HotelDetails', {hotel: item})}
            style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default HotelsListScreen;
