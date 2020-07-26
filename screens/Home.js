import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform,TextInput } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator } from "react-native";
import * as Font from 'expo-font'

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: true,

    }
 }
  async componentWillMount() {
    await Font.loadAsync({
        'quicksand': require('./../assets/fonts/Quicksand-Regular.ttf'),
        'quicksand-bold': require('./../assets/fonts/Quicksand-Bold.ttf')
    })
    this.setState({ loading: false })
}
 
  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={require('../components/images/LoginScreen/pilates.png')}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
                <Text bold size={20} style={{padding: 8, textAlign: 'center', fontFamily: 'quicksand-bold'}}>Cho chúng mình biết thêm về sức khoẻ và thói quen gần đây của bạn nhé! </Text>
            <Block style={{ paddingBottom: -HeaderHeight * 5 }}>
            <Text bold size={14} style={{paddingBottom: 10, textAlign: 'center', fontFamily: 'quicksand'}}> 1. Bạn có bệnh nền gì không?
             </Text>
            <TextInput  style = {styles.inputbox} placeholder = "(Liệt kê hoặc điền không)" />
            <Text bold size={14} style={{paddingBottom: 10, textAlign: 'center', fontFamily: 'quicksand',paddingTop:15}}> 2. Gia đình bạn có tiền sử bệnh gì không?
             </Text>
            <TextInput  style = {styles.inputbox} placeholder = "(Liệt kê hoặc điền không)" />
            <Text bold size={14} style={{paddingBottom: 10, textAlign: 'center', fontFamily: 'quicksand',paddingTop:15}}> 3. Bạn có sử dụng thuốc tránh thai trong vòng 1 tháng trở lại đây không?
             </Text>
            <TextInput  style = {styles.inputbox} placeholder = "(Liệt kê hoặc điền không)" />
            </Block>
            <Block center>
            <Button shadowless color="success" style={[styles.button, styles.shadow]}>
              Tiếp theo 
            </Button>
          </Block>
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 310,
    borderRadius: 10,
    height: 30,
    marginTop: 15
  },
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  inputbox : {
    marginLeft:'5%',
    paddingLeft: 10,
    borderRadius: 9,
    width: 310,
    height: 42,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    fontFamily: 'quicksand'
}, 
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    alignItems:'center',
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: '#F5CAC3',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});
