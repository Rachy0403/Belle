import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, Button, TouchableHighlight, AsyncStorage, TouchableOpacity } from 'react-native'
import { styles } from './LoginScreenStyle'
import { CustomButton } from '../components/CustomButton'
import { InputBox } from '../components/InputBox'
import * as Font from 'expo-font'
import { ActivityIndicator } from "react-native";


export default class LoginScreen extends Component {

	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			register: '',
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


	handleTextChange = (key, value) => {
		this.setState({ [key]: value })
	}
	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem(this.state.username);
			if (value !== null) {
				// Our data is fetched successfully
				if (value === this.state.password) {
					this.setState({ register: "pass" })
					this.props.navigation.navigate('AppStack', { username: this.state.username })
				}
				else {
					this.setState({ register: "Wrong password. Try again" })
				}
			}
			else {
				this.setState({ register: "Can't find any account with this name. You need to create a new account" })
			}
		} catch (error) {
			this.setState({ register: "Wrong password. Try again" })

		}
	}

	render() {
		if (this.state.loading) {
			return <ActivityIndicator />;
		}
		return (
			<View style={{ flex: 1, width: '100%', alignItems: 'center', fontFamily: 'galio' }}>
				<ImageBackground style={styles.libg} imageStyle={{ opacity: 0.5 }}>
					<ImageBackground source={require('../components/images/LoginScreen/Belle.png')} style={styles.logobox}>
					</ImageBackground>
					<View style={{ paddingTop: "5%", height: "50%", paddingLeft: '15%' }}>
						<View >
							<Text style={styles.title}>Đăng nhập</Text>
						</View>
						<View>
							<TextInput style={styles.inputbox} placeholder="Nhập tên ở đây" onChangeText={(text) => { this.handleTextChange('username', text) }} />
						</View>
						<View style={{ paddingTop: "5%" }}>
							<Text style={styles.title} >Mật khẩu</Text>
						</View>
						<View >
							<View style={[styles.inputbox, { flexDirection: 'row', justifyContent: 'space-between' }]}>
								<TextInput style={{ paddingLeft: 5, width: 150 }} secureTextEntry={true} placeholder="Nhập mật khẩu ở đây" onChangeText={(text) => { this.handleTextChange('password', text) }} />
							</View>
						</View>
						<View>
							<TouchableOpacity style={[styles.SubmitFormStyle, { backgroundColor: "#84a59d", alignItems: 'center', paddingRight: 20 }]} activeOpacity={.5} onPress={() => this.props.navigation.navigate('Home')}>
								<Text style={{ color: 'white', textAlign: 'center', width: '100%', fontFamily: 'quicksand-bold' }}>ĐĂNG NHẬP</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{ height: 30 }}><Text style={[styles.heading, { fontFamily: 'quicksand-bold' }]}> Social Logins</Text></View>
					<View style={{ height: 50, flexDirection: 'row', justifyContent: 'center' }}>
						<Image source={require('../components/images/LoginScreen/Facebook-button.png')} style={[styles.moviebutton, { marginRight: 30 }]}></Image>
						<Image source={require('../components/images/LoginScreen/Facebook-button.png')} style={styles.moviebutton}></Image>
					</View>

					<View style={{ alignItems: 'center' }}>
						<Text style={[styles.heading, { color: 'grey', marginBottom: 10 }]}>Không có tài khoản?</Text>
						<TouchableHighlight onPress={() => this.props.navigation.navigate('Onboarding')}>
							<Text style={[styles.heading, { fontWeight: 'bold' }]}>ĐĂNG KÝ</Text>
						</TouchableHighlight>
					</View >
				</ImageBackground>
			</View>
		)
	}
}