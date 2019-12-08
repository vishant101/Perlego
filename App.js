import React, { Component } from 'react'
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reader from './app/reducers/ReaderReducer'
import ReaderHome from './app/views/ReaderHome'
import ReaderOptions from './app/views/ReaderOptions.js'
import ReaderArticle from './app/views/ReaderArticle.js'
import COLOR from './app/styles/Colors'
import css from './app/styles/CSS'

const store = createStore(reader)

const stackNav = createStackNavigator({
    Home: {
        screen: ReaderHome,
        navigationOptions: {
            title: 'Reader',
            headerTitleStyle : css.nb_homeTextStyle,
            headerLeft: null
        }
    },
    Options: {
        screen: ReaderOptions,
        navigationOptions: {
            title: 'Options',
            headerTintColor: COLOR.DGREY,
            headerTitleStyle : css.nb_viewsTextStyle
        }
    },
    Article: {
        screen: ReaderArticle,
        navigationOptions: {
            title: 'Article',
            headerTintColor: COLOR.DGREY,
            headerTitleStyle : css.nb_viewsTextStyle,
        }
    }
})

const AppContainer = createAppContainer(stackNav);

export default class App extends Component {
	render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
	}
}