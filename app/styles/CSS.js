import { StyleSheet, Dimensions } from 'react-native'
import COLOR from './Colors'

const WINDOW_WIDTH = Dimensions.get('window').width
const MAX_CARD_WIDTH = WINDOW_WIDTH - 20

const css = StyleSheet.create({
	//NavigationBar
	nb_homeTextStyle: { alignSelf: 'center', textAlign: "center", fontSize: 30, justifyContent: 'center', flex: 1, textAlignVertical: 'center', color: COLOR.PRIMARY },
	nb_viewsTextStyle: {color: COLOR.PRIMARY },

	//CONTAINER
	container: { flex: 1, backgroundColor: COLOR.WHITE, alignItems: 'center', justifyContent: 'center' },
	containerImage: { width: 250, height: 250, marginBottom: 10 },
	containerTextStyle: { color: COLOR.DGREY, padding: 20, fontSize: 16,  textAlign: "center", justifyContent: 'center' },
	containerHeaderStyle: { color: COLOR.DGREY, marginBottom: 50, padding: 20, fontSize: 30,  textAlign: "center", justifyContent: 'center' },

	//ROW ITEM
	rowsContainer: { flex: 1 },
	rowItem: { padding: 20, marginVertical: 8, marginHorizontal: 16 },
	rowTitle: { fontSize: 32 },

	//Button
	buttonStyle: { width: 150, height: 50,  marginTop: 10, marginBottom: 10, paddingTop: 10, paddingBottom: 10, marginLeft: 30, marginRight: 30, backgroundColor: COLOR.PRIMARY, borderRadius: 20 },
	buttonTextStyle: { fontSize: 20, color: COLOR.WHITE, textAlign: "center", justifyContent: 'center' },
})
	
module.exports = css