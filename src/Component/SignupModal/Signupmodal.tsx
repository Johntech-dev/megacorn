import React, {ReactNode} from 'react'
import './Signupmodal.css'
type props = {
    children?:ReactNode;
    onClose?: () => void;
}
const Signupmodal = ({children,onClose}: props) => {
  return (
    <div className='modal-frame'>
      <div className='modal-frame-content'>
      <h3 className='mtn'>Currently under maintenance</h3>
      <button type='button' className='sign-btn' onClick={() => onClose && onClose()}>ok</button>
      {children}
    </div>
    </div>
  )
}

export default Signupmodal;
