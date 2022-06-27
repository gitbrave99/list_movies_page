const API_MOVIES='https://api.themoviedb.org/3/movie/550?api_key=6b932025ba5cc69e9778e12ecc5a77c4';

const cargarPeliculas1o = async()=>{
    
    try {
        const respuesta= await fetch(`${API_MOVIES}`);
        // console.log(respuesta);

        const listMovies=await respuesta.json();

        console.log(listMovies);

    } catch (error) {
        console.log("error: "+ error);
    }

}






const cargarPeliculas =()=>{
    
    fetch(`${API_MOVIES}`)
    .then(jsonmovies=> jsonmovies.json() )
    .then(data=>{
        console.log("movei: "+data);
    })

}
cargarPeliculas1o()
// cargarPeliculas();




