const container = document.getElementById("container")
const anterior = document.getElementById("anterior")
const siguiente = document.getElementById("siguiente")
const paginaTexto = document.getElementById('pagina')
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

let pagina = 1;

siguiente.addEventListener('click', ()=>{
    if (pagina < 1001) {
        pagina++
        cargarPeliculas();
    }
    
})

anterior.addEventListener('click', ()=>{
    if (pagina > 1) {
        pagina--
        cargarPeliculas();
    }
})



menuToggle.addEventListener('change', function() {
  if (this.checked) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }
});

const cargarPeliculas = async() => {

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9d85cf1cbc7c82147b1bfbefb5f55e8c&page=${pagina}`)

            console.log(response)
            

            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                let peliculas = ""

                data.results.forEach(pelicula => {
                    peliculas = peliculas + `<div class="movieBox"><img class="movieImg" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"><h1 class="movieTitle">${pelicula.title}</h1></div>`
                })

                container.innerHTML = peliculas
                paginaTexto.innerHTML = pagina

            }
    } catch(error) {
        console.log(error)
    }

    
}

cargarPeliculas()