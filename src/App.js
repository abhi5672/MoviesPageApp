import React, { useEffect, useState } from 'react'
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// bda69e1

import './App.css';
import searchIcon from './search.svg'
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=bda69e1';


const App = () => {
const [searchResult, setSearchResult] = useState('');
const [movies, setMovies] = useState([]);

const searchMovies = async(title) =>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  // console.log(data);
  setMovies(data.Search)
}

  useEffect(() => {
    searchMovies('Spiderman');

  }, [])
  

  return (<>
  <div className='app'>
    <h1>Movies Hub</h1>
    <div className='search'>
      <input type="text" placeholder='Search here' 
       value={searchResult}
       onChange={(e)=>{
        setSearchResult(e.target.value)
        
       }}
       />
       <button 
        onClick={()=>{
          searchMovies(searchResult)
        }} 
       className='.search button'>Search</button>
    </div>
     
     {movies?.length > 0 ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
      )

     }
</div>


   </> 
   
  )}
  

export default App;
