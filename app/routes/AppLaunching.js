import React, {useEffect, useLayoutEffect} from 'react'
import { useDispatch } from 'react-redux'
import { GlobalActions } from '../controllers/redux/GlobalSlice'

export default function AppLaunching() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('App Launching')
    // Code run when app starting
  }, [])

  useLayoutEffect(() => {
    // current language code: vi
    // console.log('Set current Language')
    // I18n.changeLanguage('en')
    //   .then(() => {
    //     console.log(I18n.language)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })

    dispatch(GlobalActions.changeLanguage({ language: 'vi' }))
  }, [])

  return <></>
}
