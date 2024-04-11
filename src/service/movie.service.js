export const getAllMovie = async () => {
    const results = await fetch("https://movie-api-get-only-bmc3.vercel.app/api")
    const data = await results.json()
    return data;
}

export const getMovieById = async(movieId) => {
    const results = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${movieId}`)
    const data = await results.json()
    return data;
}

export const getMovieByGenre = async (movieGenre) => {
    const genre_data = [];
    for(let gen of movieGenre){
        const results = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${gen}`)
        const data = await results.json()
        genre_data.push(data);
    }
    return genre_data;
}