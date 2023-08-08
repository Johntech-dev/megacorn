import React, {useState} from 'react'
import './Sectionhead.css';
import Lauchmodal from '../Lauchproducts/Lauchmodal';

const Sectionhead = () => {
  const [showLauchmodal, setshowLauchmodal] = useState(false)


  const sectionStyle = {
    backgroundImage: "url('path/to/your/image.jpg')",
    backgroundSize: "500px",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "100px 0",
};

  return (
     <div className='header' style={{
      // backgroundImage: 'url(Vector.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '850px',
      textAlign: "center",
      height: '550px',
     
      
     }}>
      <img  className='Star' alt='' src='Star 1.png'></img>
      <div className='header-text1'>
        <h1 className='headtext'>Find and launch <mark className='blue'>digital</mark></h1>
        <h1 className='headtext'><mark className='blue'>Products</mark> for Africa</h1>
        <p className='sub-text'>We connect creators & teams to their desired market of customers, partners.<br/>talents and investors needed to build great companies.</p>
        <div className='btn'>
      <button type='button' className='btn-1' onClick={() => {setshowLauchmodal(true)}}>Lauch my Products</button>
      <button type='button' className='btn-2'>Explore Product</button>
      <img className='polygon' src='Polygon 1 (1).png' alt='' />
    </div>
      </div>
    {
            showLauchmodal &&
            <Lauchmodal onClose={() => {setshowLauchmodal(false) }}/>
          }

    </div>
  )
}

export default Sectionhead;
