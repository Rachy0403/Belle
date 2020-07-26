import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import * as Font from 'expo-font';
import { ActivityIndicator } from "react-native";

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';

export default class Onboarding extends React.Component {

	constructor () {
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
				<StatusBar barStyle="light-content" />
				<Block flex center>
					<ImageBackground
						source={require('../components/images/LoginScreen/universe.png')}
						style={{ height: height, width: width, zIndex: 1 }}
					/>
				</Block>
				<Block flex space="between" style={styles.padded}>
					<Block flex space="around" style={{ zIndex: 2 }}>
						<Block>
							<Block>
								<Text style={{fontFamily: 'quicksand-bold'}} color="#F28482" size={50}>Belle</Text>
							</Block>
							<Block>
								<Text style={styles.font} size={16} color='#F6BD60'>
									of girls
								</Text>
								<Text style={styles.font} size={16} color='#F6BD60'>
									for girls
								</Text>
								<Text style={styles.font} size={16} color='#F6BD60'>
									by girls
								</Text>
							</Block>
						</Block>
						<Block center>
							<Button
								shadowless
								style={styles.button}
								color={materialTheme.COLORS.BUTTON_COLOR}
								onPress={() => navigation.navigate('Option')}>
								KHÁM PHÁ NGAY
              </Button>
						</Block>
					</Block>
				</Block>
			</Block>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.COLORS.BLACK,
	},
	padded: {
		paddingHorizontal: theme.SIZES.BASE * 2,
		position: 'relative',
		bottom: theme.SIZES.BASE,
	},
	button: {
		fontFamily: 'quicksand-bold',
		width: width - theme.SIZES.BASE * 9,
		height: theme.SIZES.BASE * 3,
		borderRadius: 30,
		shadowRadius: 0,
		shadowOpacity: 0,
	},
	font: {
		fontFamily: 'quicksand'
	}
});
