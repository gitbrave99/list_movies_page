let page = 1;
const btnPreview = document.getElementById("btnPreviewPage");
const btnNext = document.getElementById("btnNextPage");


btnNext.addEventListener("click", () => {
    if (page < 1000) {
        page += 1;
        cargarPeliculas1o();
        console.log("next page");
    }
});

btnPreview.addEventListener("click", () => {
    if (page > 1) {
        page -= 1;
        cargarPeliculas1o();
        console.log("next page");
    }
});

const cargarPeliculas1o = async () => {

    try {
        const API_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=6b932025ba5cc69e9778e12ecc5a77c4&page=${page}`;
        const respuesta = await fetch(`${API_MOVIES}`);
        // console.log(respuesta);

        const listMovies = await respuesta.json();
        if (respuesta.status === 200) {
            let peliculas = "";

            listMovies.results.forEach(movie => {
                console.log(movie);
                peliculas += `
                <div class="cardMovie col-12 col-sm-12 col-md-3 mb-4"><div class="card">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                </div>
            </div>
            </div>`;
            });
            document.getElementById("cardListMovies").innerHTML = peliculas;

        } else {
            console.log("error codigo");
        }


    } catch (error) {
        console.log("error: " + error);
    }

}






const cargarPeliculas = () => {

    fetch(`${API_MOVIES}`)
        .then(jsonmovies => jsonmovies.json())
        .then(data => {
            console.log("movei: " + data);
        })

}
cargarPeliculas1o()
// cargarPeliculas();