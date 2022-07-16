import React, {Component} from 'react';
import {View} from 'react-native';
import {withNavigation} from 'react-navigation';
import NavbarIcon from '../../../components/molecules/NavbarIcon';

class Navbar extends Component {
  render() {
    return (
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavbarIcon
          onPress={() => this.props.navigation.navigate('Home')}
          img={require('../../../assets/icon/home-active.png')}
          title="Home"
          active
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate('Orders')}
          img={require('../../../assets/icon/order.png')}
          title="Orders"
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate('')}
          img={require('../../../assets/icon/help.png')}
          title="Help"
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate('')}
          img={require('../../../assets/icon/inbox.png')}
          title="Chat"
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate('')}
          img={require('../../../assets/icon/account.png')}
          title="Profile"
        />
      </View>
    );
  }
}

export default withNavigation(Navbar);
