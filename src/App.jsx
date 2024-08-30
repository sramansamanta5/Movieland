import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './Search.svg'
import Moviecard from './Moviecard'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm]=useState('')

  const Movie1={
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

    

  //http://www.omdbapi.com/?apikey=[yourkey]&
  //API key=11f9bfaa
  //http://www.omdbapi.com/?i=tt3896198&apikey=11f9bfaa
 const Api_Url="http://www.omdbapi.com/?apikey=11f9bfaa";
  
 const searchMovies= async (title)=>{
   const response=await fetch(`${Api_Url}&s=${title}`)
   const data=await response.json();
   setMovies(data.Search)
   
   
 }
 
 
 useEffect(()=>{
    searchMovies("Spiderman")
   },[])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for Movies.....' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
        <img src={SearchIcon} alt='search' onClick={()=>{searchMovies(searchTerm)}}></img>
      </div>

     {movies.length>0?(<div className='container'>
        {movies.map((movie)=>{return <Moviecard movie={movie}/>})}
      </div>):(<div> <h2>No movies found</h2></div>)}

      
    </div>
  )
}

export default App
