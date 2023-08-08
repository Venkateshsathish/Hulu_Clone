import React, { useState } from 'react'
import './App.css'
import Header from './component/header/Header';
import Navebar from './component/Navebar/Navebar';
import requests from './Helper/requests';
import Results from './component/result/Results';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  console.log(selectedOption);
  return (
    <div className='app'>
      <Header/>
      <Navebar setSelectedOption= {setSelectedOption}/>
      <Results selectedOption= {selectedOption}/>
    </div>
  )
}

export default App
