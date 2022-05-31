import React from 'react'
import { ModalPortal } from 'react-native-modals'
import { GSpinnerComponent } from '../components/Dialog/GSpinner'
import { GToastComponent } from '../components/Dialog/GToast'


export const GlobalComponents = () => {

  return (
    <>
      <ModalPortal />
      <GToastComponent />
      <GSpinnerComponent />
    </>
  )
}
