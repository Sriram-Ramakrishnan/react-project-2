import React from 'react'
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


const App = () => {
    const cards = data.map(card => {
        return (<Card 
            key = {card.id}
            item = {card}/>)
    })


  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='card-list'>
        {cards}
      </section>
    </div> 
  )
}

export default App;
