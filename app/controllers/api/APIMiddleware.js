import { store } from '../../redux/AppStore'
import _ from 'lodash'
import { logout } from '../../../modules/authen/AuthenSlice'

const requestErrorHandler = (response) => {
	const { data } = response
	// const { MessageView, ErrorCode, Message, ActionView } = data
	// //console.log('[Axios Response Middleware]', "Message:", Message)

	// if (ErrorCode === 101 || ErrorCode === 1) {
	// 	store.dispatch(logout())
	// } else if (Message || ActionView) {
	// 	const onPress = () => {
	// 		if (data.Type) {
	// 			switch (
	// 				data.Type
	// 				/* navigation to screen */
	// 			) {
	// 			}
	// 		}
	// 		console.log('[Axios Response Middleware]', 'Type:', data.Type)
	// 	}

	// 	if (MessageView == 'dialog' || (_.has(data, 'ActionView') && !_.isNull(data.ActionView))) {
	// 		DialogHandle({
	// 			data: _.get(data, 'ActionView', {
	// 				Content: _.get(data, 'Message'),
	// 				Button: [
	// 					{
	// 						Style: 'Primary',
	// 						Text: 'OK',
	// 						DeepLink: undefined,
	// 					},
	// 				],
	// 			}),
	// 			failed: ErrorCode,
	// 		})
	// 	} else if (MessageView == 'toast' || _.isString(Message)) {
	// 		ToastHandle({ data, onPress, failed: data.ErrorCode })
	// 	}
	// }

	// console.log('[Axios middlware return]', data)

	return data
}

export default { requestErrorHandler }

// const DialogHandle = ({ data: { Title, TitleColor, Content, Button, IconLink }, failed }) => {
// 	APIResponseDialog.show({ Title, TitleColor, Content, Button, IconLink })
// }

// const ToastHandle = ({ data: { Message }, onPress, failed }) => {
// 	GlobalToast.show({
// 		type: failed ? 'error' : undefined,
// 		message: Message,
// 		onPress: onPress,
// 	})
// }
