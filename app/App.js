import React from 'react'
import AppNavigator from './routes/AppNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppLaunching from './routes/AppLaunching'
import { Provider } from 'react-redux'
import { persistor, store } from './controllers/redux/AppStore'
import { GlobalComponents } from './constants/Global'
import { PersistGate } from 'redux-persist/integration/react'
// import { PersistGate } from 'redux-persist/lib/integration/react'
// import { persistor, store } from './controllers/redux/AppStore'

const App = () => {
	console.log('App')
	console.log('====================================')

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider>
					{/* Init state when launching */}
					<AppLaunching />
					{/* Notification handle FIREBASE*/}
					{/* <Notification />  */}
					{/* Main component */}
					<AppNavigator />
					{/* Global component */}
					<GlobalComponents />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
