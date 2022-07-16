import React from 'react';
import {Text, Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const GopayFeature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.icon} />
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 15,
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default GopayFeature;
