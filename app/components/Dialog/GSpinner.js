import React, { createRef, useEffect, useLayoutEffect, useState } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

const GSpinnerRef = createRef()

export default {
	/**
	 * Show Alert
	 * @param {string=} label
	 * @param {number=} timeout
	 */
	show: (label, timeout) => {
		Keyboard.dismiss()
		GSpinnerRef.current?.show(label, timeout)
	},
	hide: () => {
		GSpinnerRef.current?.hide()
	},
}

export const GSpinnerComponent = (props) => {
	const [visible, setVisible] = useState(false)
	const [label, setLabel] = useState('')

	useLayoutEffect(() => {
		GSpinnerRef.current = {
			show: (label, timeout = 5) => {
				setVisible(true)
				setLabel(label)
				setTimeout(() => {
					setVisible(false)
				}, timeout * 1000)
			},
			hide: () => setVisible(false),
		}
	}, [])

	// useEffect(() => {
	// 	console.log('visible', visible)
	// 	if (visible) {
	// 		settimeout(() => {
	// 			setVisible(false)
	// 		}, 5000)
	// 	}
	// }, [visible, timeout])

	return visible ? (
		<View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
			<Spinner visible={visible} textStyle={styles.spinner} textContent={label} />
		</View>
	) : null
}

const styles = StyleSheet.create({
	spinner: {
		color: '#fff',
		top: 50,
		fontWeight: '500',
		fontSize: 16,
	},
})
