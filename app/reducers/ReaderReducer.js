import { combineReducers } from 'redux'

const initialState = {
	selectedArticle: null,
}

function readerReducer(state = initialState, action) {
	const newState = { ...state }
	
	switch (action.type) {
		case 'UPDATE_ARTICLE': {
            newState.selectedArticle = action.selectedArticle
            console.log(newState)
			return newState
		}
		default: {
			return state
		}
	}
}

module.exports = combineReducers({ reader: readerReducer })
