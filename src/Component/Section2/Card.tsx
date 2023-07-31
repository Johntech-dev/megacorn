import React from 'react';
import './Card.css';
type Cardprops = {
    title: string;
    image: JSX.Element;
    text: string;
}
const Card = ({title, image, text} :Cardprops) => {
  return (
    <div className='container'>
    <div className='cards'>
      <h5 className='Card-title'>{title}</h5>
      <div className='img'>{image}</div>
      <h6 className='Card-text'>{text}</h6>
    </div>
    </div>
  )
}

export default Card
