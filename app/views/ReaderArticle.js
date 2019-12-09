import React, { Component } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import { connect } from 'react-redux'
import { LocalHtml } from '../html/snakes.html'
const myHtml = require('./index.html');

class ReaderArticle extends Component {
	constructor(props) {
		super(props)
		this.state = { renderedOnce: false }
		console.log(myHtml)
	}
	
	componentDidMount() {
		this.setState({ renderedOnce: true });
	}
	
	render() {
		const { articles, articleIndex } = this.props
		const article = articles[articleIndex]
		console.log(this.state.renderedOnce)
		return (
			<WebView 
				originWhitelist={['*']}
				ref={webview => { this.myWebview = webview }}
				source= {{ uri: article.url }}
				style={{flex: 1}}
				allowFileAccess={true}
				allowUniversalAccessFromFileURLs={true}
			>
			</WebView>
		)
			
	}
}

const mapStateToProps = (state, props) => ({
	articles: state.reader.articles,
	articleIndex: state.reader.articleIndex
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ReaderArticle)