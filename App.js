/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Searchbar */}
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="What do ypu want to eat?"
                style={{
                  borderWidth: 1,
                  borderColor: '#E8E8E8',
                  borderRadius: 25,
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 18,
                }}
              />
              <Image
                source={require('./icon/search.png')}
                style={{position: 'absolute', top: 5, left: 12}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>
          <ScrollView>
            {/* Gopay */}
            <View style={{marginHorizontal: 17, marginTop: 8}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#2C5FB8',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  padding: 14,
                }}>
                <Image source={require('./icon/gopay.png')} />
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  Rp. 94.122
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 20,
                  paddingBottom: 14,
                  backgroundColor: '#2F65BD',
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                }}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image source={require('./icon/pay.png')} />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      marginTop: 15,
                    }}>
                    Pay
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image source={require('./icon/nearby.png')} />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      marginTop: 15,
                    }}>
                    nearby
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image source={require('./icon/topup.png')} />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      marginTop: 15,
                    }}>
                    topup
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image source={require('./icon/more.png')} />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      marginTop: 15,
                    }}>
                    more
                  </Text>
                </View>
              </View>
            </View>

            {/* main feature */}
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 18,
                }}>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-ride.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-MENU
                  </Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-car.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-CAR
                  </Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-bluebird.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-BLUEBIRD
                  </Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-send.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-SEND
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-deals.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-DEALS
                  </Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-pulsa.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-PULSA
                  </Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-food.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-FOOD
                  </Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#EFEFEF',
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('./icon/go-more.png')} />
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-MORE
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 17,
                backgroundColor: '#F2F2F4',
                marginTop: 20,
              }}
            />

            {/* News section */}
            <View style={{paddingTop: 16, paddingHorizontal: 16}}>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('./dummy/sepak-bola.jpg')}
                  style={{height: 170, width: '100%', borderRadius: 6}}
                />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'black',
                    opacity: 0.3,
                    borderRadius: 6,
                  }}
                />
                <View
                  style={{
                    height: 15,
                    width: 60,
                    position: 'absolute',
                    top: 16,
                    left: 16,
                  }}>
                  <Image
                    source={require('./logo/white.png')}
                    style={{
                      height: undefined,
                      width: undefined,
                      resizeMode: 'contain',
                      flex: 1,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingTop: 16,
                  paddingBottom: 20,
                  borderBottomColor: '#E8E9ED',
                  borderBottomWidth: 1,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
                  GO-NEWS
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#7A7A7A',
                    marginBottom: 11,
                  }}>
                  Dimas Drajat selamatkan pinalti, Timnas U-23 kalahkan Brunei
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61A756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    alignSelf: 'flex-end',
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    READ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/home-active.png')}
            />
            <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/order.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/help.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              help
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/inbox.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              inbox
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/account.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fCFF',
  },
});
