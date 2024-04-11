import React from 'react'
import {format} from 'date-fns'
import { getAllMovie, getMovieById } from '@/service/movie.service'

const MovieDetailPage = async({params}) => {
  const data = await getMovieById(params.movieId);
  const rateStar= Math.round(data.payload.rating);
  function Star(rate_star){
    const star =[];
    for (let i = 1; i <= rate_star; i++){
      star.push(<i className="fa-solid fa-star text-yellow-400"></i>)
    }
    if(star.length <= 5){
      for(let i = star.length; i<5; i++){
        star.push(<i className="fa-regular fa-star text-yellow-400"></i>)
      }
    }
    return star;
  }
  return (
    <div className="w-[100%] h-[100vh] bg-[#38130D] grid grid-cols-1">
      <div className="w-[90%] h-[85%] m-auto mt-[5%] text-white">
        <div className="w-[65%] h-[100%] float-left">
          <img src={data.payload.image} alt="" className="w-[100%] h-[100%]"/>
        </div>
        <div className="w-[35%] h-[100%] float-left p-[40px]">
          <h1 className="font-bold text-[24px]">{data.payload.director}</h1>
          <p>{data.payload.runtime} minutes</p>
          <p className="italic">{data.payload.genre}</p>
          <p>{Star(rateStar)}</p>
          <h1 className="mt-[50px] font-bold text-[24px]">{data.payload.movie_title} ({data.payload.released_year})</h1>
          <p>{data.payload.description}</p>

          <p className="mt-[50px]">{format(data.payload.posted_at, 'MMMM d, yyy, h:mm:ssa')}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage