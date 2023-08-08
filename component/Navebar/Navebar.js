import React from 'react';
import './Navebar.css';
import requests from '../../Helper/requests';

const Navebar = ({setSelectedOption}) => {
  return (
    <div className='nav'>
        <h2 onClick={()=>setSelectedOption(requests.fetchTrending)}>Trending</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchTopRate)}>Top Rate</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchActionMovies)}>Action</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchMystery)}>Mystery</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchScifi)}>Sci-fi</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchWestern)}>Western</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchAnimation)}>Animation</h2>
        <h2 onClick={()=>setSelectedOption(requests.fetchTv)}>Movie</h2>
    </div>
  )
}

export default Navebar;
