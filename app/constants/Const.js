import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const radiusBase = 2
const spaceBase = 4
const borderBase = 0.5

const Const = {
	baseAPI: '',
	baseWS: '',

	r: (n) => n * radiusBase,
	// radius
	r1: radiusBase,
	r2: radiusBase * 2,
	r3: radiusBase * 3,
	r4: radiusBase * 4,
	r5: radiusBase * 5,
	r6: radiusBase * 6,
	r7: radiusBase * 7,
	r8: radiusBase * 8,
	r9: radiusBase * 9,
	r10: radiusBase * 10,
	r12: radiusBase * 12,
	r15: radiusBase * 15,

	// margin and padding
	s: (n) => n * spaceBase,
	s1: spaceBase,
	s2: spaceBase * 2,
	s3: spaceBase * 3,
	s4: spaceBase * 4,
	s5: spaceBase * 5,
	s6: spaceBase * 6,
	s7: spaceBase * 7,
	s8: spaceBase * 8,
	s9: spaceBase * 9,
	s10: spaceBase * 10,
	s11: spaceBase * 11,
	s12: spaceBase * 12,
	s13: spaceBase * 13,
	s14: spaceBase * 14,
	s15: spaceBase * 15,
	s16: spaceBase * 16,
	s17: spaceBase * 17,
	s18: spaceBase * 18,
	s19: spaceBase * 19,
	s20: spaceBase * 20,

	// border
	b: (n) => n * borderBase,
	b1: borderBase,
	b2: borderBase * 2,
	b3: borderBase * 3,
	b4: borderBase * 4,
	b5: borderBase * 5,
	b6: borderBase * 6,
	b7: borderBase * 7,
	b8: borderBase * 8,
	b9: borderBase * 9,

	/*
  Although dimensions are available immediately, 
  they may change (e.g due to device rotation, foldable devices etc) 
  so any rendering logic or styles that depend on these constants should try 
  to call this function on every render, rather than caching the value
  */
	windowHeight: () => Dimensions.get('window').height,
	windowWidth: () => Dimensions.get('window').width,
	screenHeight: () => Dimensions.get('screen').height,
	screenWidth: () => Dimensions.get('screen').width,

	OS: Platform.OS,

	statusBarHeight: getStatusBarHeight(),

	defaultLanguage: 'en',
}

export default Const
