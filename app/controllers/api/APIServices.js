import axios from 'axios'
import _ from 'lodash'
import { APIFilter } from '../api/APIConfig'
import APIMiddleware from './APIMiddleware'

const AppTranslate = (t) => t

// axios.defaults.timeout = 60 * 1000
const unAuthenAPI = APIFilter.unAuthen

const templateResponseData = {
	result: 'failed',
	message: 'Không xác định',
	code: -1,
}

async function post(url, request, config) {
	/* check token */
	const token = axios.defaults.headers.common['Authorization']
	if (!token && _.isString(url) && unAuthenAPI.indexOf(url) !== -1) {
		console.log('No token', url)
		return
	}

	console.log('\n[SERVICES Post]: \n\t', url, '\n\t', request, '\n')
	Object.keys(request).forEach((key) => request[key] === undefined && delete request[key])
	let responseData = templateResponseData

	await axios
		.post(url, request, config)
		.catch(function (error) {
			responseData.code = 404
			responseData.message = AppTranslate('Unknown error')

			if (error.response) {
				console.log(error.response.status, error.response.data)
				responseData.Message = _.isString(error.response.data)
					? error.response.data
					: AppTranslate('Unknown error')
				responseData.ErrorCode = error.response.status
			}
			console.warn('[Axios]', error)
			return { data: responseData }
		})
		.then(APIMiddleware.requestErrorHandler)
		.then((data) => {
			responseData = data
		})
	console.log('\n[SERVICES Post Response]: \n\t', url, '\n\t', responseData, '\n')
	return responseData
}

async function get(url, request) {
	console.log('\n[SERVICES Get]: \n\t', url, '\n\t', request, '\n')
	Object.keys(request).forEach((key) => request[key] === undefined && delete request[key])
	let responseData = templateResponseData
	await axios
		.get(url, {
			params: request,
		})
		.then(APIMiddleware.requestErrorHandler)
		.then((response) => {
			responseData = response.data
		})
		.catch((error) => {
			if (error.response) {
				console.log(error.response.status, error.response.data)
				responseData = error.response.data
			}
		})

	console.log('\n[SERVICES Get Response]: \n\t', url, '\n\t', responseData, '\n')
	return responseData
}

export const setAxiosHeader = (key, value) => {
	axios.defaults.headers.common[key] = value
}
export const setAuthorizationToken = (token) => {
	setAxiosHeader('Authorization', 'Bearer '.concat(token))
}

setAxiosHeader('Accept-Encoding', 'gzip')

export default { post, get, setAxiosHeader, setAuthorizationToken }
