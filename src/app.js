const cargarPeliculas = async() => {

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/750?api_key=9d85cf1cbc7c82147b1bfbefb5f55e8c`)

            console.log(response)

            if (response.status === 200) {
                const data = await response.json()

                console.log(data)
            }
    } catch(error) {
        console.log(error)
    }

    
}

cargarPeliculas()