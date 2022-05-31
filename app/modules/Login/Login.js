import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import Styles from '../../constants/Styles'
import AppColors from '../../assets/AppColors'
import GToast from '../../components/Dialog/GToast'
import Const from '../../constants/Const'
import GSpinner from '../../components/Dialog/GSpinner'

const Login = (props) => {
	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true)
	const [user, setUser] = useState()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user)
		if (initializing) setInitializing(false)
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
		return subscriber // unsubscribe on unmount
	}, [])

	const createWithEmail = () => {
		if (!email || !password) return
		GSpinner.show()
		auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				GSpinner.hide()
				console.log('User account created & signed in!')
			})
			.catch((error) => {
				GSpinner.hide()
				GToast.error({ message: error.message })
			})
	}

	const loginWithEmail = () => {
		console.log(email, password)
		GSpinner.show()
		if (!email || !password) return
		auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				GSpinner.hide()
				console.log('User account created & signed in!')
			})
			.catch((error) => {
				GSpinner.hide()
				GToast.error({ message: error.message })
			})
	}

	const userSignOut = () => {
		auth()
			.signOut()
			.then(() => console.log('User signed out!'))
			.catch((error) => {
				GToast.error({ message: error.message })
			})
	}

	return (
		<View style={[Styles.Layout.columnCenter, { flex: 1 }]}>
			<TextInput
				placeholder="Email"
				onChangeText={setEmail}
				keyboardType="email-address"
				style={[Styles.TextInput.default, { height: 40, padding: Const.s3, width: '80%' }]}
				autoCapitalize="none"
			/>
			<TextInput
				placeholder="Password"
				onChangeText={setPassword}
				secureTextEntry
				style={[Styles.TextInput.default, { height: 40, padding: Const.s3, width: '80%' }]}
			/>
			<View style={[Styles.Layout.row]}>
				<Button title="Create with Email" onPress={createWithEmail} />
				<Button title="Login with Email" onPress={loginWithEmail} />
			</View>
			<View style={[Styles.Layout.columnCenter, { height: 40 }]}>
				<Text style={[Styles.Text.title]}>Welcome {user?.email ?? 'none'}</Text>
			</View>
			<Button title="Sign out" onPress={userSignOut} />
		</View>
	)
}

export default Login
