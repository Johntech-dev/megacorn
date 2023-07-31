import React  from 'react'
import './Sectionbody.css';
import Card from './Card';
import './Card.css'
const Sectionbody = () => {
  return (
    <div className='body'>
        <h4 className='h4' >All you need from idea to launch</h4>
        <p className='p'>From collating your ideas to finding co-founders & founding teams to first launch and finding early adopters</p>
        <div className='container'>
          <Card title='Ideation' image={<img className='img' alt='' src={'pen.png'}/>} text='Brainstorm your ideas and run them through our system for refining'  />
          {<Card title='Co-founder' image={<img className='img' alt='' src={'handshake.png'}/>} text='Brainstorm your ideas and run themthrough our system for refining'  />}
          {<Card title='Building' image={<img className='img' alt='' src={'Building.png'}/>} text='Brainstorm your ideas and run themthrough our system for refining'  />}
        </div>
        <div className='container'>
          <Card title='Launch' image={<img className='img' alt='' src={'maki_rocket.png'}/>} text='Brainstorm your ideas and run them through our system for refining'  />
          {<Card title='Distribution' image={<img className='img' alt='' src={'dashicons_admin-links.png'}/>} text='Brainstorm your ideas and run themthrough our system for refining'  />}
          {<Card title='Investment' image={<img className='img' alt='' src={'healthicons_money-bag.png'}/>} text='Brainstorm your ideas and run themthrough our system for refining'  />}
        </div>
          </div>
  )
}

export default Sectionbody
