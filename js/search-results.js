// Hover de HOME

let home = document.querySelector(".navIndex")


home.addEventListener('mouseover', function() {
    
    home.style.color = '#979594'
  });

home.addEventListener('mouseout', function() {

    home.style.color = 'black'
});

// Hover de Canciones

let playlist = document.querySelector(".navPlaylist")

playlist.addEventListener('mouseover', function() {

    playlist.style.color = '#979594'
  });

playlist.addEventListener('mouseout', function() {

    playlist.style.color = 'black'
});

// Hover de Generos

let generos = document.querySelector(".navGenres")

generos.addEventListener('mouseover', function() {

    generos.style.color = '#979594'
  });

generos.addEventListener('mouseout', function() {

    generos.style.color = 'black'
});

// Hasta aca van los Hover del "a".

// El lugar donde buscar 

//let qs = location.search //quarristrin en formato textp
//let qstoobjects = new URLSearchParams(qs)

//let datoabuscar =   qstoobjects.get("buscar") //necesito lo que el usuario escribo en el imput

//let endpointbusqueda = "https://api.deezer.com/search?q=${datoabuscar}"

//fetch(endpointbusqueda)
//.then(function (response) {
 //   return response.json()
//})
//.then(function (datos) {
   // console.log(datos)

    // mostrar resultados de busqueda en la pantalla

    // mostar un aviso en caso de que la busqueda no tenga resultadso 
//})
//.catch(function (e) {
 //   console.log(e)
//})



// si el array viene basyo podess con inner tex y if poner esto no tiene resultados