import Assets from '../assets/Assets';
import {Font, FontSize} from '../assets/AppFont';

export default {
  Text: {
    largeTitle: {
      color: Assets.Colors.header,
      fontFamily: Font.bold,
      fontSize: FontSize.xxx_large,
    },
    heading1: {
      color: Assets.Colors.header,
      fontFamily: Font.bold,
      fontSize: FontSize.xx_large,
    },
    heading2: {
      color: Assets.Colors.header,
      fontFamily: Font.bold,
      fontSize: FontSize.x_large,
    },
    heading3: {
      color: Assets.Colors.header,
      fontFamily: Font.bold,
      fontSize: FontSize.large,
    },
    title: {
      color: Assets.Colors.title,
      fontFamily: Font.bold,
      fontSize: FontSize.medium,
    },
    subTitle: {
      color: Assets.Colors.subTitle,
      fontSize: FontSize.medium,
      fontFamily: Font.medium,
    },
    body: {
      color: Assets.Colors.body,
      fontFamily: Font.medium,
      fontSize: FontSize.medium,
    },
    bodyDialog: {
      color: Assets.Colors.body,
      fontFamily: Font.medium,
      fontSize: FontSize.large,
    },
    smallBody: {
      color: Assets.Colors.body,
      fontFamily: Font.medium,
      fontSize: FontSize.small,
    },
    readMore: {
      color: Assets.Colors.lightBody,
      fontFamily: Font.bold,
    },
  },
  TextInput: {
    default: {
      color: Assets.Colors.body,
      fontFamily: Font.semiBold,
      fontSize: FontSize.medium,
    }
  },
  Icon: {
    listItemIcon: {
      borderRadius: 8,
      width: 30,
      height: 30,
      resizeMode: 'center',
    },
    listButtonIcon: {
      width: 30,
      height: 30,
      resizeMode: 'center',
    },
    icon: {
      width: 26,
      height: 26,
      resizeMode: 'center',
    },
    flagHeaderHome: {
      // padding: 5,
      borderRadius: 22,
      height: 22,
      width: 22,
      resizeMode: 'contain',
    },
    iconHeaderHome: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
    },
  },
  screenHeader: ({
    title,
    backgroundColor = Assets.Colors.bgBlue,
    headerRight,
    header,
    ...props
  }) => {
    return {
      headerShown: false,
      // ...TransitionPresets.SlideFromRightIOS,
      ...props,
    }
  },
  Layout: {
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    rowCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowCenterVertical: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    columnCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    columnCenterHorizontal: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}
