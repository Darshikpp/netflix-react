
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <Banner
          fetchUrl={requests.fetchNetflixOriginals}
          />
      <Row
     isLargeRow={true}
    titrle="NetflixOriginals"
    fetchUrl={requests.fetchNetflixOriginals}
    />


    <Row
    title="Trending"
    fetchUrl={requests.fetchTrending}
    />

    <Row
    title="TopRated"
    fetchUrl={requests.fetchTopRated}
    />


    

     <Row
    title="ActionMovies"
    fetchUrl={requests.fetchActionMovies}
    />

 <Row
    title="ComedyMovies"
    fetchUrl={requests.fetchComedyMovies}
    />

   <Row
    title="HorrorMovies"
    fetchUrl={requests.fetchHorrorMovies}
    />



       <Row
    titile="RomanceMovie"
    fetchUrl={requests.fetchRomanceMovies}
    />
    
     <Row
   
    titile="Documentaries"
    fetchUrl={requests.fetchDocumentaries}
    />

    </div>
  );
}

export default App;
