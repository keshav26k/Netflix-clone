import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav"
import "./App.css";

function App() {
  return (
    <div className="app">
        <Nav />
        <Banner />

        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
