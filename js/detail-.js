// Hover de HOME

let home7 = document.querySelector(".navIndex")


home7.addEventListener('mouseover', function() {
    
    home7.style.color = '#979594'
  });

home7.addEventListener('mouseout', function() {

    home7.style.color = 'black'
});

// Hover de Canciones

let playlist7 = document.querySelector(".navPlaylist")

playlist7.addEventListener('mouseover', function() {

    playlist7.style.color = '#979594'
  });

playlist7.addEventListener('mouseout', function() {

    playlist7.style.color = 'black'
});

// Hover de Generos

let generos7 = document.querySelector(".navGenres")

generos7.addEventListener('mouseover', function() {

    generos7.style.color = '#979594'
  });

generos7.addEventListener('mouseout', function() {

    generos7.style.color = 'black'
});

// Hasta aca van los Hover del "a".


// detalles

let qs = location.search //quarristrin en formato textp

let qsToobjects = new URLSearchParams(qs);

let datoabuscar =   qsToobjects.get("buscar") //necesito lo que el usuario escribo en el imput


let endPointBusqueda = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${datoabuscar}`



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
      
      <article class="Buscador" >
      <a href="./detail.html">
      <ul class="ul-Buscador">
      <li >
        <h4>${titleS}</h4> 
        <h6>${nartistas}</h6> 
        <img src="${imageS}">
        <a href="./playlist.html"> ESTO NO SE Agregar A Playlist </a>
      </li>
      </ul>
      </a>
      </article>
      `;
    }
  

    document.querySelector(".jssearch").innerHTML = busq;

    // mostrar resultados de busqueda en la pantalla

    // mostar un aviso en caso de que la busqueda no tenga resultados 
})
.catch(function (e) {
    console.log(e)
})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



// si el array viene basyo podess con inner tex y if poner esto no tiene resultados











// detalles