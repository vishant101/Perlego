import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native';
import { WebView } from 'react-native-webview'
import { connect } from 'react-redux'
import { BUTTONTEXT, VIEWS, STRINGS } from '../utils/Constants'
import Button from '../common/Button'
import css from '../styles/CSS'

class ReaderArticle extends Component {
	constructor(props) {
		super(props)
	}

	
	onNextPress(){
		
	}

	onPrevPress(){
		
	}

	
	render() {
		const { articles, articleIndex } = this.props
		const article = articles[articleIndex]

		return (
			<View style={{ flex: 1 }}>
				<WebView 
					ref={webview => { this.myWebview = webview }}
					source= {{ uri: article.url }}
					style={{flex: 1  }}
				/>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
					<Button text={BUTTONTEXT.PREV} onPress={() => this.onPrevPress()} />
					<Button text={BUTTONTEXT.NEXT} onPress={() => this.onNextPress()} />
				</View>
			</View>
			
		)
			
	}
}

const mapStateToProps = (state, props) => ({
	articles: state.reader.articles,
	articleIndex: state.reader.articleIndex
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ReaderArticle)