import _ from 'lodash'
import { StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native'
import Toast, { BaseToast } from 'react-native-toast-message'
import Assets from '../../assets/Assets'
import Const from '../../constants/Const'
import Styles from '../../constants/Styles'
import ImageViewPlaceHolder from '../ImageView/ImageViewPlaceHolder'
import React from 'react'

/**
 * Toast type
 */
const toastConfig = {
	/* 
      overwrite 'success' type, 
      modifying the existing `BaseToast` component
    */
	default: ({ text1, text2, ...rest }) => (
		<BaseToast
			text1NumberOfLines={2}
			text2NumberOfLines={4}
			trailingIcon={{ uri: undefined }}
			style={{
				borderLeftColor: Assets.Colors.brown,
			}}
			contentContainerStyle={styles.contentContainerStyle}
			// Text style
			text1Style={Styles.Text.title}
			text2Style={Styles.Text.body}
			text1={text1}
			text2={text2}
			{...rest}
		/>
	),

	/*
      Reuse the default ErrorToast toast component
    */
	error: ({ text1, text2, ...rest }) => (
		<BaseToast
			trailingIcon={{ uri: undefined }}
			style={{
				borderLeftColor: Assets.Colors.cadetblue,
			}}
			contentContainerStyle={styles.contentContainerStyle}
			text1NumberOfLines={2}
			text2NumberOfLines={4}
			// text style
			text1Style={Styles.Text.title}
			text2Style={Styles.Text.body}
			text1={text1}
			text2={text2}
			{...rest}
		/>
	),
	/* 
      or create a completely new type - `my_custom_type`,
      building the layout from scratch
    */
	image: ({ text1, text2, onPress, props, ...rest }) => {
		const width = Const.windowWidth()
		const { disable, type, imageUrl } = props

		return (
			<TouchableOpacity
				disabled={!!disable}
				onPressOut={onPress}
				style={{
					borderRadius: Const.r6,
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: Const.s4,
					paddingVertical: Const.s2,
					backgroundColor: Assets.Colors.toastBackground,
					flex: 1,
					width: width - Const.s4 * 2,
					minHeight: 80,
					marginHorizontal: Const.s4,
				}}>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						padding: Const.s1,
					}}>
					<ImageViewPlaceHolder disable width={50} height={50} source={{ uri: imageUrl }} />
				</View>
				<View
					style={{
						flexGrow: 1,
						justifyContent: 'space-between',
						paddingHorizontal: Const.s2,
						flexShrink: 1,
					}}>
					<Text numberOfLines={2} style={[Styles.Text.title, { flexShrink: 1 }]}>
						{text1}
					</Text>
					<Text numberOfLines={2} style={[Styles.Text.subTitle, { flexShrink: 1 }]}>
						{text2}
					</Text>
				</View>
			</TouchableOpacity>
		)
	},
}

export const GToastComponent = (props) => {
	return <Toast config={toastConfig} />
}

/**
 * Read and custom toast type in toastConfig
 * @param {object} options
 * @param {'default'|'error'|'image'} options.type - 'default', 'error', 'image',
 * @param {string} options.title,
 * @param {string} options.message,
 * @param {boolean} options.vibrate,
 * @param {function} options.onPress
 * @param {object} options.props - other props of Toast
 */
function show({ type = 'default', title, message, vibrate = false, onPress, ...props }) {
	if (type == 'error') vibrate = true
	if (vibrate) Vibration.vibrate()

	const _onPress = () => {
		hide()
		setTimeout(() => _.isFunction(onPress) && onPress())
	}

	Toast.show({
		type,
		visibilityTime: wordsToDuration(title + message),
		text1: title,
		text2: message,
		topOffset: Const.statusBarHeight,
		onPress: _onPress,
		...props,
	})
}

/**
 * Hide toast
 */
const hide = () => {
	Toast.hide()
}

/**
 * Read and custom toast type in toastConfig
 * @param {object} options
 * @param {string} options.title,
 * @param {string} options.message,
 * @param {function} options.onPress
 */
const error = ({ title, message, onPress, ...props }) => {
	show({ type: 'error', title, message, onPress, ...props })
}

/**
 * similar to show, but show from bottom. set bottomOffset is required
 * @param {object} options
 * @param {string} options.type - 'default', 'error', 'image',
 * @param {string} options.title,
 * @param {string} options.message,
 * @param {boolean} options.bottomOffset,
 * @param {function} options.onPress
 * @param {object} options.props - other props of Toast
 */
const showFromBottom = ({ type = 'default', title, message, bottomOffset, onPress, ...props }) => {
	show({ type, title, message, position: 'bottom', bottomOffset, ...props })
}

const showWithImage = ({ title, message, disable, imageUrl, ...props }) => {
	show({
		type: 'image',
		title,
		message,
		props: { disable, imageUrl },
		...props,
	})
}

const GToast = {
	hide,
	show,
	error,
	showFromBottom,
	showWithImage,
}

const wordsToDuration = (msg) => {
	if (msg.length < 60) return 2000
	else if (msg.length < 150) return 3000
	else return 4000
}

export default GToast

const styles = StyleSheet.create({
	contentContainerStyle: {
		// toast background color
		backgroundColor: Assets.Colors.darkgoldenrod,
		paddingStart: Const.s3,
		borderTopEndRadius: Const.r3,
		borderBottomEndRadius: Const.r3,
	},
})
