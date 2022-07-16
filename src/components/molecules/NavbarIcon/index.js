import React from 'react';
import {Text, Image, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavbarIcon = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image style={{width: 26, height: 26}} source={props.img} />
        <Text
          style={{
            fontSize: 10,
            color: props.active ? '#43AB4A' : '#545454',
            marginTop: 4,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavbarIcon;
