import React from 'react';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/Navbar/NavBar';
import Row from '../../components/Row/Row';
import requests from '../../helpers/requests';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <NavBar />

      <Banner />
      <Row
        title='NETFILX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title=' Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title=' Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title=' Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title=' Horror Movie' fetchUrl={requests.fetchHorrorMovies} />
      <Row title=' Romance movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
