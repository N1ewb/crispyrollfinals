import {React, useState,useEffect } from 'react'
import axios from 'axios';

// import RightIcon from '../images/rightarrow.svg'
// import LeftIcon from '../images/leftarrow.svg'

import Airingcard from "./Airingcard";

import './AiringList.css'

const API_URL = 'https://api.jikan.moe/v4/seasons/';

function AiringList() {
    const [isLoading, setLoading] = useState(true)
    const [data, setAiring] = useState([]);

    const currentMonth = new Date().getMonth() + 1; 
    const year = new Date().getFullYear(); 
    var season;
    
    switch (true) {
        case currentMonth >= 3 && currentMonth <= 5:
          season = 'spring';
          break;
        case currentMonth >= 6 && currentMonth <= 8:
          season = 'summer';
          break;
        case currentMonth >= 9 && currentMonth <= 11:
          season = 'fall';
          break;
        default:
          season = 'winter';
          break;
      }

    const getAiringAnime = async () => {
        try {
            const response = await axios.get(`${API_URL}${year}/${season}?&limit=8`);
            const data = await response.data;
            const sortedAiring = data.data.sort((a, b) => a.status.localeCompare(b.status));
            setAiring(sortedAiring);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
          setLoading(false)
        }
        
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        getAiringAnime();
      }, 1000);
      return () => clearTimeout(timer);
        
    }, []);


    return (
      <>
      <div className='airing-container'>
          <div className='airing-carousell'>
              {data?.length > 0 ? (
                isLoading? <div>Loading ...</div>:<div className='airing-cards'>
                {data.map((data, index) => (

                    <Airingcard anime={data} key={index} id="index"/>
                    
                ))}
            </div>  
              ) : (
                  <div className='empty'>
                      <h6>No airing anime found</h6>
                  </div>
              )}
          </div>      
      </div>
    </>
    );
}

export default AiringList;
