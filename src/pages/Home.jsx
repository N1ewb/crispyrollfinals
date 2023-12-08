import React from 'react'
import Hero from '../components/Hero';
import AiringList from '../components/AiringList';

import './Home.css';

function Home() {

  return (
    <>
      <div className='home-container'>
        <section className='slide-section'>
          <Hero />
        </section>

        <section className='currently-airing'>
          <div className='section-title'>
            <h1>New Season Exclusives</h1>
            <p>Please watch these titles on a legit streaming service provider!</p>
          </div>
          <AiringList />
        </section>

        <section className='Anilist-section'>
        </section>
      </div>
    </>
  )
}

export default Home