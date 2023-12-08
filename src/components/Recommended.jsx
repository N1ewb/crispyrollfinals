import React from 'react'

import './Recommended.css'

const Recommended = ({anime}) => {
  return (
    <>
        <div className='hero-items-card-container'style={{backgroundImage: `url(${anime.images.jpg.image_url})`, backgroundPosition: 'center'}}>
            <div className='hero-items-card'>
                <div className='hero-item-info'>
                    <p>{anime.title}</p>
                </div>
                <img className='heroitem' src={anime[0].images.jpg.large_image_url} alt="Carousel Items"/>
                
            </div>
        </div>
    </>
  )
}

export default Recommended