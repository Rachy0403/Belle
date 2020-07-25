import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
/* import Images from '../constants/Images'; */

export default class Option extends React.Component {
	render() {
		const { navigation } = this.props;

		return (
			<Block flex style={styles.container}>
				<Block center>
					<Block center style={styles.padded}>
						<Text color="black" size={25}>Bạn đang quan tâm đến vấn đề gì?</Text>
					</Block>
					<Block flex style={styles.item}>
						<Button
							shadowless
							style={styles.button}
							color={materialTheme.COLORS.BUTTON_COLOR}
							onPress={() => navigation.navigate('App')}>
							Biện pháp tránh thai
						</Button>
						<Button
							shadowless
							style={styles.button}
							color={materialTheme.COLORS.BUTTON_COLOR}
							onPress={() => navigation.navigate('App')}>
							Biện pháp phá thai
						</Button>
						<Button
							shadowless
							style={styles.button}
							color={materialTheme.COLORS.BUTTON_COLOR}
							onPress={() => navigation.navigate('App')}>
							Các bệnh lây qua đường tình dục
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
		marginTop: theme.SIZES.BASE * 10,
		marginBottom: theme.SIZES.BASE * 2,
		paddingHorizontal: theme.SIZES.BASE * 2,
		position: 'relative',
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
	},
});
