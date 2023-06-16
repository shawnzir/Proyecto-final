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

let qsToobjects = new URLSearchParams(qs)

let datoabuscar =   qsToobjects.get("buscar") //necesito lo que el usuario escribo en el imput


let endPointBusqueda = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${datoabuscar}`


let endpointbusqueda = "https://api.deezer.com/search?q=${datoabuscar}"

fetch(endPointBusqueda)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data.data)


    let busq = "";

    for (let i = 0; i <  data.data.length; i++) {
      let titleS = data.data[i].title;
      let imageS = data.data[i].album.cover_medium;
      let nartistas = data.data[i].artist.name;
  
      busq += `
      
      <article class="" >
      <a href="">
      <ul class="">
      <li >
        <h4>${titleS}</h4> 
        <img src="${imageS}">
        <h5>${nartistas}</h5> 
      </li>
      </ul>
      </a>
      </article>
      `;
    }
  
    // mostrar resultados de busqueda en la pantalla

    // mostar un aviso en caso de que la busqueda no tenga resultados 
})
.catch(function (e) {
    console.log(e)
})



// si el array viene basyo podess con inner tex y if poner esto no tiene resultados