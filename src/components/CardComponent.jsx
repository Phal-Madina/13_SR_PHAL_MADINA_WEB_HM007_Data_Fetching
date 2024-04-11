import React from "react";
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CardComponent = async ({movies , genre}) => {

  let movie_name = genre;
  function getGenre(){
    movies.payload?.map(j => {
      for (let x=0; x < genre.length; x++){
        if(j.genre === genre[x]){
          movie_name = genre[x]
        }
      }
    })
    return movie_name;
  }
  getGenre();
  return (
    <>
      {/* all */}
      <div className="w-[100%] h-auto bg-[#38130D] grid grid-cols-1">
        <div className="w-[94%] h-[350px] float-left m-auto mt-5">
          <h1 className="h-[12%] w-[100%] float-left flex items-center p-0 m-0 text-[20px] font-bold text-white">
            {movie_name} &gt;
          </h1>
          <div className="h-[350px] w-[100%] float-left">
            <Carousel>
              <CarouselContent className="h-[300px] p-[15px] gap-5">
                {movies.payload.map((i) => (
                  <Link href={`/view-movie-detail/${i.movie_id}`} key={i.movie_id}>
                    <div className="card card-compact w-[300px] bg-base-100 shadow-xl overflow-hidden">
                      <div className="h-[60%]">
                        {i.image == "" ? 
                        (<img src="https://puui.qpic.cn/vcover_hz_pic/0/wzx7pbebgpxlqqr1612442717167/0" className="h-[100%] w-[100%] p-[15px]"/>) : 
                        (<img src={i.image} className="h-[100%] w-[100%] p-[15px]"/>)}
                      </div>
                      <div className="card-body h-[40%] bg-white p-0">
                        <h2 className="card-title line-clamp-1">
                          {i.movie_title}
                        </h2>
                        <h4 className="line-clamp-2">{i.description}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
