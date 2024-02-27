import React from 'react';
import './App.css';
import Row from "./components/Row"
import requests from './requests';
import Nav from "./components/Navbar";
import Banner from "./components/Banner";


function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <div className='background_website'>
      <Row 
      title="Origionals" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top-Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
      </div>
  );
}

export default App;
