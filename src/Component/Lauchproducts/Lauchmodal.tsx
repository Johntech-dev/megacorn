import React, {ReactNode} from 'react'
import './lauchmodal.css'
import { type } from 'os'

type props = {
    children?: ReactNode;
    onClose?:() => void;
}

const Lauchmodal = ({children,onClose}: props) => {
  return (
    <div className='modal-frame'>
      <div className='modal-frame-content'>
      <h3 className='mtn'>there is no Products to display</h3>
      <p>Kindly bare with us</p>
      <button type='button' className='sign-btn' onClick={() => (onClose && onClose())}>Ok</button>
      {children}
      </div>
    </div>
  )
}

export default Lauchmodal
