import { combineReducers } from 'redux'

const initialState = {
    articles: [],
	articleIndex: 0,
}

function readerReducer(state = initialState, action) {
	const newState = { ...state }
	
	switch (action.type) {
        case 'SET_ARTICLES': {
            newState.articles = action.articles
            console.log(newState)
			return newState
		}
		case 'UPDATE_ARTICLE_INDEX': {
            newState.articleIndex = action.articleIndex
            console.log(newState)
			return newState
		}
		default: {
			return state
		}
	}
}

module.exports = combineReducers({ reader: readerReducer })
