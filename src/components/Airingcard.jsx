import React from 'react';
import { Link } from 'react-router-dom'

import './Airingcard.css'

function Airingcard({anime}) {
    
  return (
    <>
    <Link className='airing-card=link' to={`/Animepage/${anime.mal_id}`} style={{textDecoration:'none'}}>
                <div className='airing-card'>
                    <img src={anime.images.jpg.large_image_url}/>
                    <p>{anime.title}</p>
                    <div className='airing-info-container'>
                            <div className='airing-info'>
                            <h4>{anime.title}</h4>
                            <h4>{anime.score}☆ <span>{anime.scored_by}</span></h4>
                            <h4>{anime.episodes} Episodes</h4>

                        </div>
                    </div>
                </div>  
        </Link>
        </>
  )
}

export default Airingcard