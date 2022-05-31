import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, StyleSheet, Text, View } from 'react-native'
// import { GlobalActions } from '../controllers/redux/GlobalSlice'
// import { store } from '../controllers/redux/AppStore';
import Assets, { Icons } from '../assets/Assets'
import Example from '../modules/Example/Example'

const Tab = createBottomTabNavigator()

const AppTranslate = (t) => t

export default function AppTabBar({ route }) {
	// const badge = useSelector(state => state.room?.totalUnreadCount)
	// const navigation = useNavigation()

	let screensData = [
		{
			title: 'Example',
			screen: Example,
			icon: Icons.btn_close,
		},
		{
			title: 'Firebase',
			screen: Example,
			icon: Icons.btn_close,
		},
		{
			title: 'Animated',
			screen: Example,
			icon: Icons.btn_close,
			// badge: badgeMessages,
		},
		{
			title: 'Sub Tabs',
			screen: Example,
			icon: Icons.btn_close,
		},
		{
			title: 'Tab5',
			screen: Example,
			icon: Icons.btn_close,
		},
	]

	// useLayoutEffect(() => {
	//   store.dispatch(GlobalActions.setInitScreenName({ name: route?.name }))
	// }, [navigation])

	return (
		<Tab.Navigator
			initialRouteName="Story"
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarStyle: {
					backgroundColor: Assets.Colors.burlywood,
					borderTopWidth: 1,
					borderTopColor: Assets.Colors.springgreen,
				},
				tabBarActiveTintColor: Assets.Colors.chocolate,
				tabBarInactiveTintColor: Assets.Colors.grey,
				tabBarItemStyle: {},
			})}>
			{screensData.map((s) => (
				<Tab.Screen
					name={s.title}
					component={s.screen}
					key={s.title}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<View style={{ flex: 1, justifyContent: 'flex-end' }}>
								<Image
									source={s.icon}
									style={{
										tintColor: focused && color,
										flex: 0.8,
										alignItems: 'center',
										aspectRatio: 1,
									}}
								/>
							</View>
						),
						tabBarLabel: ({ focused, color }) => (
							<Text
								style={{
									...styles.title,
									color,
								}}>
								{AppTranslate(s.title)}
							</Text>
						),
						tabBarBadge: s.badge ? s.badge : null,
					}}
				/>
			))}
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	title: {
		// fontFamily: Global.Font.medium,
		// fontSize: Global.FontSize.smaller,
	},
})
