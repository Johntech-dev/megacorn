import React, {useState} from 'react'
import './Navbar.css'
import Signupmodal from '../SignupModal/Signupmodal'

const Navbar = () => {
    const  [showSignupmodal, setshowSignupmodal] = useState(false);
  return (
    <div className='nav'>
      <div>Logo</div>
      <div className='aside-1'>
      <div className='same1'><a href='#'>Products</a></div>
      <div className='same1'><a href='#'>Community</a></div>
      <div className='same1'><a href='#'>Creator</a></div>
      <div className='same1'><a href='#'>About</a></div>
      </div>
      <div className='aside-2'>
      <div className='login-btn'>Login</div>
      <div className='signup-btn'><button type='button' onClick={() => {setshowSignupmodal(true) }} >Signup</button></div>
      </div>

          {
            showSignupmodal &&
            <Signupmodal onClose={() => {setshowSignupmodal(false) }} />
          }

    </div>
  
    
   
   )
 }



export default Navbar;
