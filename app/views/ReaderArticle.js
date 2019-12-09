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
		this.webView = null
	}

	onNextPress(){
		this.webView.postMessage('Hello from RN')
	}

	onPrevPress(){
		console.log(this.webView)
		this.webView.postMessage('Hello from RN')
	}

	_reWebView = (webView) => {
		this.webView = webView
	}
	
	render() {
		const { articles, articleIndex } = this.props
		const article = articles[articleIndex]

		const jsCode = `
			var current = 0;
			var body = $('body');
			var headings = $('h2');
			
    		document.addEventListener("message", function(data) {
				++current;

				if (headings.length > current) {
					$("html, body").animate( { scrollTop: headings.eq(current).position().top }, 200);
				}

				event.preventDefault();
			});`

		return (
			<View style={{ flex: 1 }}>
				<WebView 
					ref={this._reWebView}
					source= {{ uri: article.url }}
					style={{ flex: 1 }}
					injectedJavaScript={jsCode}
          			javaScriptEnabled={true}
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