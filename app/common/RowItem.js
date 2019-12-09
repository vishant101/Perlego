import  React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import css from '../styles/CSS'

const RowItem = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={css.rowItem}
            activeOpacity = { 0.5 }
            onPress={onPress}
        >
            <Text style={css.rowTitle}>{title}</Text>
        </TouchableOpacity>
	)
}

export default RowItem