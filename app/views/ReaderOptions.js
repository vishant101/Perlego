import React, { Component } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { VIEWS } from '../utils/Constants'
import css from '../styles/CSS'
import RowItem from '../common/RowItem'

class ReaderOptions extends Component {
    constructor(props){
        super(props)
	}
	
	onRowPress(articleIndex){
		const { navigation } = this.props
		console.log(articleIndex)
		this.props.updateArticleIndex(articleIndex)
		navigation.navigate(VIEWS.ARTICLE)
	}

	render() {
		console.log(this.props.articles)
		return (
		<SafeAreaView style={css.rowContainer}>
			<FlatList
			  data={this.props.articles}
			  renderItem={({ item }) => <RowItem title={item.title} onPress={() => this.onRowPress(item.id)} />}
			  keyExtractor={item => item.id}
			/>
		  </SafeAreaView>
		);
    }
}
  
const mapStateToProps = (state, props) => ({
    articles: state.reader.articles
})

const mapDispatchToProps = dispatch => ({
	updateArticleIndex: (articleIndex) => {
		dispatch({ type: 'UPDATE_ARTICLE_INDEX', articleIndex })
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ReaderOptions)