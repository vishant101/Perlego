import  React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import css from '../styles/CSS'

const Button = ({ text, onPress }) => {
    return (
    <TouchableOpacity
        style={css.buttonStyle}
        activeOpacity = { 0.5 }
        onPress={onPress}
		>
			<Text style={css.buttonTextStyle}>{text}</Text>
		</TouchableOpacity>
	)
}

export default Button
