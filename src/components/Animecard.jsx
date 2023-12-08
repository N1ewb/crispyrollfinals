import React from 'react'
import { Link } from 'react-router-dom'

import './Animecard.css'

function Animecard({anime}) {
  return (
    <>

  <Link  to={`/Animepage/${anime.mal_id}`} style={{textDecoration:'none'}}>
    <div className='anime-card'>
        <div className='Poster'>
            <img src={anime.images.jpg.large_image_url !== 'N/A'? anime.images.jpg.large_image_url: '123123'}/>
            <h5>{anime.title_english}</h5>
        </div>
        <div className='anime-details'>
        
        </div>
    </div>
    </Link>

    </>
  )
}

export default Animecard