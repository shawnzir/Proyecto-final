// Hover del Index

let home6 = document.querySelector(".navIndex")


home6.addEventListener('mouseover', function() {
    
    home6.style.color = '#979594'
  });

home6.addEventListener('mouseout', function() {

    home6.style.color = 'black'
});

// Hover de Canciones

let playlist6 = document.querySelector(".navPlaylist")

playlist6.addEventListener('mouseover', function() {

    playlist6.style.color = '#979594'
  });

playlist6.addEventListener('mouseout', function() {

    playlist6.style.color = 'black'
});

// Hover de Generos

let generos6 = document.querySelector(".navGenres")

generos6.addEventListener('mouseover', function() {

    generos6.style.color = '#979594'
  });

generos6.addEventListener('mouseout', function() {

    generos6.style.color = 'black'
});

// Hasta aca van los Hover del "a".

// El lugar donde buscar 

let qs = location.search //quarristrin en formato textp
let qstoobjects = new URLSearchParams(qs)

let datoabuscar =   qstoobjects.get("") //necesito lo que el usuario escribo en el imput

let endPointBusqueda = "https://api.deezer.com/search?q=${datoabuscar}"

fetch(endPointBusqueda)
.then(function (response) {
    return response.json()
})
.then(function (datos) {
    console.log(datos)

    // mostrar resultados de busqueda en la pantalla

    // mostar un aviso en caso de que la busqueda no tenga resultadso 
})
.catch(function (e) {
    console.log(e)
})



// si el array viene basyo podess con inner tex y if poner esto no tiene resultados