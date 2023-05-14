import React from 'react'
import MovieCard from './movieCard'

export default function MovieList(props) {
 
 //filmeList=[...filmeList,{title:{props.title},rating:{props.rating}}]

const movieCards=props.filmeList.map((item) => {
return (

<MovieCard  posterURL={item.posterURL} title={item.title} description={item.description} rating={item.rating}/> )
}
)
  return (
    <div style={{display:'flex'}}>

      {movieCards}

    </div>
  )
}
