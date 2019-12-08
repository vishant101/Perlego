import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../common/Button'
import { connect } from 'react-redux';
import css from '../styles/CSS'
import { BUTTONTEXT, VIEWS, STRINGS } from '../utils/Constants'
import IMAGES from '../utils/Images.js'

class ReaderHome extends Component {
	constructor(props) {
		super(props)
	}

	onStartButtonPress(){
		const { navigation } = this.props
		navigation.navigate(VIEWS.OPTIONS)
	}

	render() {
		return (
			<View style={css.container}>
				<Image source={IMAGES.BOOK} />
				<Text style={css.containerTextStyle}>{STRINGS.HOMETEXT}</Text>
				<Button text={BUTTONTEXT.START} onPress={() => this.onStartButtonPress()} />
			</View>
		)
	}
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ReaderHome)