import React from 'react';
import {Text, View, Button} from 'react-native';
import Navbar from '../../organisms/Navbar';

const Orders = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Orders Page</Text>
        <Button
          title="Doto Detail"
          onPress={() => props.navigation.navigate('OrderDetail')}
        />
      </View>
      <Navbar />
    </View>
  );
};

export default Orders;
