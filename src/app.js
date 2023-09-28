const container = document.getElementById("container")
const cargarPeliculas = async() => {

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9d85cf1cbc7c82147b1bfbefb5f55e8c`)

            console.log(response)
            

            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                let peliculas = ""

                data.results.forEach(pelicula => {
                    peliculas = peliculas + `<div class="movieBox"><img class="movieImg" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"><h1 class="movieTilte">${pelicula.title}</h1></div>`
                })

                container.innerHTML = peliculas

            }
    } catch(error) {
        console.log(error)
    }

    
}

cargarPeliculas()