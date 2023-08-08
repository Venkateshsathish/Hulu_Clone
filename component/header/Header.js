import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { FlashOn, LiveTv, Person2Outlined, Search, VideoLibrary } from '@mui/icons-material';
import "./Header.css";
import hulu from '../../Image/logo.webp';



const Header = () => {
  return (
    <div className='header'>
      <div className='header_icons'>
       <div className='header_icon header_icone--active'>
          <HomeIcon/>
          <p>Home</p>
       </div>

       <div className='header_icon'>
          <FlashOn/>
          <p>Trending</p>
       </div>

       <div className='header_icon'>
          <LiveTv/>
          <p>Verified</p>
       </div>

       <div className='header_icon'>
          <VideoLibrary/>
          <p>Collection</p>
       </div>

       <div className='header_icon'>
          <Search/>
          <p>Search</p>
       </div>

       <div className='header_icon'>
          <Person2Outlined/>
          <p>Account</p>
       </div>

       
      </div> 
      <img src={hulu} alt='logo'/>
    </div>
  )
}

export default Header
