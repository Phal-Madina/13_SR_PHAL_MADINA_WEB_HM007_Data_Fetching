import CardComponent from "@/components/CardComponent";
import { getAllMovie, getMovieByGenre } from "@/service/movie.service";
import Image from "next/image";

export default async function Home() {
  const movies = await getAllMovie();
  function get_genre(){
    let arr_gen = [];
    movies.payload.map(gen => {
      arr_gen.push(gen.genre);
    })
    return arr_gen;
  }
  function getMovieGenera(genre){
    const allGenera= [];
    for(let i=0; i < genre.length; i++){
      if(allGenera.indexOf(genre[i]) === -1){
        allGenera.push(genre[i]);
      }
    }return allGenera;
  }
  const allGenera = getMovieGenera(get_genre());
  const movie_genre = await getMovieByGenre(allGenera);
  return (
    <div className="h-[100vh]">
      <div className="bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')] h-[100vh] w-[100%] bg-cover flex justify-center items-start relative">
        <div className="absolute left-0 top-0 bg-[#00000027] w-[100%] h-[100%] z-10"></div>
      </div>
      <CardComponent movies={movies} genre={'All movie'} />
      {movie_genre.map(e => (
        <CardComponent movies={e} genre ={allGenera}/>
      ))}
   </div>
  );
}
