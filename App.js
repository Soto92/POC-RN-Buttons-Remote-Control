/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Ac, Cof, Nfs, Skyrim, Fifa, Fortnite, Pubg, Lol} from './src/svg/svgs';

const App: () => React$Node = () => {
  const [isActive, setActive] = useState([
    {srcImg: require('./src/img/Ac.jpg'), state: false, name: 'Ac'},
    {srcImg: require('./src/img/Cof.jpg'), state: false, name: 'Cof'},
    {srcImg: require('./src/img/nfs.jpg'), state: false, name: 'Nfs'},
    {srcImg: require('./src/img/skyrim.jpg'), state: false, name: 'Skyrim'},
    {srcImg: require('./src/img/fifa.jpg'), state: false, name: 'Fifa'},
    {srcImg: require('./src/img/fortnite.jpg'), state: false, name: 'Fortnite'},
    {srcImg: require('./src/img/pubg3.jpg'), state: false, name: 'Pubg'},
    {srcImg: require('./src/img/lol.jpeg'), state: false, name: 'Lol'},
  ]);

  const [srcImage, setSrcImage] = useState();

  const activeButton = value => {
    const eX = isActive.map(item => {
      if (item.name === value) {
        return {...item, state: !item.state};
      } else {
        return {...item, state: false};
      }
    });
    setActive(eX);
    eX.forEach(item => {
      if (item.state && item.name === value) {
        setSrcImage(item.srcImg);
      } else if (!item.state && item.name === value) {
        setSrcImage(null);
      }
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={style.content}
          contentInsetAdjustmentBehavior="automatic">
          <View style={style.viewImg}>
            {srcImage && <Image style={style.img} source={srcImage} />}
          </View>
          <View style={style.borderbuttons}>
            <View style={style.buttongroup}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: isActive[2].state ? '#353535' : '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderTopStartRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => activeButton('Nfs')}>
                <Nfs color={isActive[2].state ? '#53FFFB' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: isActive[0].state ? '#353535' : '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderTopEndRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => activeButton('Ac')}>
                <Ac color={isActive[0].state ? '#53FFFB' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: isActive[3].state ? '#353535' : '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderBottomStartRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => activeButton('Skyrim')}>
                <Skyrim color={isActive[3].state ? '#53FFFB' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: isActive[6].state ? '#353535' : '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderBottomEndRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => activeButton('Pubg')}>
                <Pubg color={isActive[6].state ? '#53FFFB' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  position: 'absolute',
                  backgroundColor: isActive[1].state ? '#353535' : '#424242',
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 58,
                  height: 58,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => activeButton('Cof')}>
                <Cof color={isActive[1].state ? '#53FFFB' : 'white'} />
              </TouchableOpacity>
            </View>
            <View style={style.bottomButons}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...style.bottomButon,
                  backgroundColor: isActive[4].state ? '#353535' : '#424242',
                  width: 150,
                  justifyContent: 'flex-start',
                  paddingTop: 3,
                  borderTopEndRadius: 40,
                  borderTopStartRadius: 40,
                }}
                onPress={() => activeButton('Fifa')}>
                <Fifa color={isActive[4].state ? '#53FFFB' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...style.bottomButon,
                  backgroundColor: isActive[5].state ? '#353535' : '#424242',
                  borderBottomStartRadius: 40,
                }}
                onPress={() => activeButton('Fortnite')}>
                <Fortnite color={isActive[5].state ? '#53FFFB' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...style.bottomButon,
                  backgroundColor: isActive[7].state ? '#353535' : '#424242',
                  borderBottomEndRadius: 40,
                }}
                onPress={() => activeButton('Lol')}>
                <Lol color={isActive[7].state ? '#53FFFB' : 'white'} />
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
    justifyContent: 'flex-start',
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
  },
  viewImg: {
    width: width - 48,
    height: width - 200,
    marginVertical: 30,
    justifyContent: 'center',
  },
  img: {
    width: width - 48,
    height: width - 200,
    borderRadius: 30,
    marginVertical: 30,
  },
});
