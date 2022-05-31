import React from 'react'
import { Button, Text, View } from 'react-native'
import Styles from '../../constants/Styles';
import {navigateToLogin} from '../../utils/NavUtils';

const Example = (props) => {
	return (
		<View style={[Styles.Layout.columnCenter, {flex: 1}]}>
			<Text>Example</Text>
			<Button title="Go to Login" onPress={navigateToLogin} />
		</View>
	)
}

export default Example
