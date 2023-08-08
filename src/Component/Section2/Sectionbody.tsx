import React  from 'react'
import './Sectionbody.css';
import Card from './Card';
import {FaHandshake,} from 'react-icons/fa';
import {PiCodeFill, PiLinkSimpleBold} from 'react-icons/pi';
import {BsFillRocketTakeoffFill, BsPenFill} from 'react-icons/bs';
import {AiFillDollarCircle} from 'react-icons/ai';
import './Card.css'
const Sectionbody = () => {
  return (
    <div className='body' >
        <h4 className='h4' >All you need from idea to launch</h4>
        <p className='p'>From collating your ideas to finding co-founders & founding teams to first launch and finding early adopters</p>
        <div className='container'>
          <Card title='Ideation' image={<BsPenFill size={90} color='var(--dark-color)' style={{backgroundColor: 'var(--card1-color)'}} /> }text='Brainstorm your ideas and run them through our system for refining'  />
          {<Card title='Co-founder' image={<FaHandshake size={90} color='var(--dark-color)' style={{backgroundColor: 'var(--card1-color)'}}/>} text='Brainstorm your ideas and run themthrough our system for refining'  />}
          {<Card title='Building' image={<PiCodeFill size={90} color='var(--dark-color)' style={{backgroundColor: 'var(--card1-color)'}}/> } text='Brainstorm your ideas and run themthrough our system for refining'  />}
        </div>
        <div className='container'>
          <Card title='Launch' image={<BsFillRocketTakeoffFill size={90} color='var(--dark-color)' style={{backgroundColor: 'var(--card1-color)'}}/>} text='Brainstorm your ideas and run them through our system for refining'  />
          {<Card title='Distribution' image={<PiLinkSimpleBold size={90} color='var(--dark-color)' style={{backgroundColor: 'var(--card1-color)'}}/>} text='Brainstorm your ideas and run themthrough our system for refining'  />}
          {<Card title='Investment' image={<AiFillDollarCircle size={90} color='var(--dark-color)' style={{backgroundColor: 'var(--card1-color)'}}  />} text='Brainstorm your ideas and run themthrough our system for refining'  />}
        </div> 
          </div>
  )
}

export default Sectionbody
