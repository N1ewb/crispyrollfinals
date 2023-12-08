import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Recommended from './Recommended';

import './Hero.css'

const API_URL = 'https://api.jikan.moe/v4/anime?'
const CACHE_KEY = 'recommendedData';

const Hero = () => {
    const [recommended, setRecommended] = useState();
    const [isLoading, setLoading] = useState(true);
    const titles = ['freiren', 'maquia', 'Eighty Six'];

    const fetchRecommended = async () => {
        try {
          const cachedData = localStorage.getItem(CACHE_KEY);

          if (cachedData && JSON.parse(cachedData).length > 0) {
              setRecommended(JSON.parse(cachedData));
              console.log('Cached data:', JSON.parse(cachedData));
          } else {
              const responses = await Promise.all(titles.map(async (title) => {
                  const response = await axios.get(`${API_URL}q=${title}&limit=1`);
                  return response.data;
              }));
  
              const recommendedData = responses.reduce((accumulator, data,index) => {
                  if (data) {
                      accumulator.push(data.data[index]);
                  }
                  return accumulator;
              }, []);
  
              setRecommended(recommendedData);
              console.log(recommendedData);
              localStorage.setItem(CACHE_KEY, JSON.stringify(recommendedData));
            }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false); 
        }
      };

    useEffect(()=>{
        fetchRecommended()
    },[])

    if (isLoading){
        return <div>Loading...</div>
    }

  return (
    <>
        <div className='hero-container'>
            {recommended?.length > 0 ?(recommended.map((anime, index)=>{
                <Recommended anime={anime[index]} key={index}/>
            })):
            <div className='hero-container'><h1>No recommended</h1></div>
            }
        </div>
    </>
  )
}

export default Hero