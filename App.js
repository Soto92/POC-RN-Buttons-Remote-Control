/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {assassinsIcon, callOfDutyIcon, fifaIcon, lolIcon} from './src/svg/svgs';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={style.content}
          contentInsetAdjustmentBehavior="automatic">
          <View style={style.borderbuttons}>
            <View style={style.buttongroup}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderTopStartRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('press')}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderTopEndRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('press')}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderBottomStartRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('red')}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderBottomEndRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('blue')}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  position: 'absolute',
                  backgroundColor: '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('blue')}>
                {assassinsIcon}
              </TouchableOpacity>
            </View>
            <View style={style.bottomButons}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...style.bottomButon,
                  width: 150,
                  justifyContent: 'flex-start',
                  paddingTop: 3,
                  borderTopEndRadius: 40,
                  borderTopStartRadius: 40,
                }}
                onPress={() => console.log('blue')}>
                {callOfDutyIcon}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...style.bottomButon,
                  borderBottomStartRadius: 40,
                }}
                onPress={() => console.log('blue')}>
                {lolIcon}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...style.bottomButon,
                  borderBottomEndRadius: 40,
                }}
                onPress={() => console.log('blue')}>
                {fifaIcon}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  buttongroup: {
    position: 'absolute',
    rotation: 45,
    width: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  borderbuttons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 12,
    marginTop: -10,
    marginBottom: 4,
  },
  bottomButons: {
    height: 150,
    width: 150,
    borderRadius: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    backgroundColor: '#424242',
    zIndex: 2,
    borderColor: 'black',
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  bottomButon: {
    width: 74,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#424242',
  },
});
