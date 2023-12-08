import React from 'react'
import BookmarkIcon from '../images/bookmarkorange.svg';
import './Animepagecontent.css'


function Animepagecontent({anime}) {

    const ScoredBy = () => {
        if(anime.scored_by >= 1000){
            return (parseInt(anime.scored_by) / 1000).toFixed(0) + 'K';
        } else {
          return anime.scored_by.toString();
        }
    }

    
  return (
    <>
        <div className='anime-page-content-container'>
            <div className='anime-background' style={{ backgroundImage: `url(${anime.images.jpg.image_url})`, backgroundPosition:'center' }}>
                <img src={anime.images.jpg.image_url} alt="anime"/>
            </div>
            <div className='anime-main-content-container'>
                <div className='left-content'>
                    <h1>{anime.title}</h1>
                    <p>{`Average Rating: ${anime.score} ${ScoredBy()}`}</p>
                    <button className='left-content-button'><img src={BookmarkIcon}/>ADD TO BOOKMARKS</button>
                    <p>{anime.synopsis}</p>
                    <p>{anime.genres.name}</p>
                </div>
                <div className='right-content'>
                <div>
                    {anime.trailer.embed_url? 
                    <iframe title="YouTube Video" width="350px" height="190px" src={anime.trailer.embed_url} frameBorder="0" allowFullScreen>
                    </iframe>: 
                    <div className='empty'>
                        <h5>no trailers</h5>
                    </div>
                    }
                </div>
                    
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default Animepagecontent