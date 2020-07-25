import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import {styles} from './InputBoxStyle'

export default class InputBox extends Component {
    render() {
        return (
            <View>
            <View >
                    <Text style = {styles.title}> {this.props.title}</Text>
            </View>
            <View>
                    <TextInput style = {styles.inputbox} placeholder = {this.props.placeholder} onChangeText ={this.props.onCT}/>
            </View>
            </View>
        )
    }
}
