import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {styles} from './CustomButtonStyle.js' 
export default class CustomButton extends PureComponent {
    render() {
        return (
            <View>
            <TouchableOpacity style={[styles.SubmitFormStyle,{backgroundColor:this.props.buttoncolor,alignItems:'center',paddingRight: 20}]} activeOpacity = { .5 } onPress={ this.props.buttonclick }>
            <Text style = {{color: this.props.textcolor, fontWeight : 'bold',textAlign:'center',width:'100%',fontFamily: 'quicksand'}}>{this.props.title}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
