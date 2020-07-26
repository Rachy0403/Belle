import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import * as Font from 'expo-font';
import { ActivityIndicator } from "react-native";

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';

export default class Option extends React.Component {

	constructor() {
		super()
		this.state = {
			loading: true
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
		const { navigation } = this.props;

		if (this.state.loading) {
			return <ActivityIndicator />;
		}

		return (
			<Block flex style={styles.container}>
				<Block center>
					<ImageBackground source={require('../components/images/LoginScreen/yoga.png')} style={styles.logo}>
					</ImageBackground>
					<Block center style={styles.padded}>
						<Text style={styles.font} color="black" size={25}>Bạn muốn tiếp tục với tư cách gì?</Text>
					</Block>
					<Block flex style={styles.item}>
						<Button
							shadowless
							style={styles.button}
							color={materialTheme.COLORS.BUTTON_COLOR}
							onPress={() => navigation.navigate('App')}>
							Ẩn danh
						</Button>
						<Button
							shadowless
							style={styles.button}
							color={materialTheme.COLORS.BUTTON_COLOR}
							onPress={() => navigation.navigate('Log In')}>
							Đăng nhập
						</Button>
					</Block>
				</Block>
			</Block>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.COLORS.WHITE,
	},
	padded: {
		marginTop: theme.SIZES.BASE * 5,
		marginBottom: theme.SIZES.BASE * 2,
		paddingHorizontal: theme.SIZES.BASE * 2,
		position: 'relative',
	},
	logo: {
		marginTop: theme.SIZES.BASE * 3,
		width: theme.SIZES.BASE * 12,
		height: theme.SIZES.BASE * 15
	},
	item: {
		flexDirection: "column"
	},
	button: {
		margin: 10,
		width: width - theme.SIZES.BASE * 6,
		height: theme.SIZES.BASE * 3,
		borderRadius: 30,
		shadowRadius: 0,
		shadowOpacity: 0,
		fontFamily: 'quicksand'
	},
	font: {
		textAlign: 'center',
		fontFamily: 'quicksand-bold',
	}
});
