
let qs =location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id')

let endPointartistdetalle= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`

let endpointdetallealbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`



fetch(endPointartistdetalle)

.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

    let contenedor = document.querySelector(".jsalbumes-detalle")
    console.log(contenedor);


      
      let imageS = data.cover_big;
      let nArtistas = data.artist.name;
      let nAlbum = data.title
      let Nduration = data.duration

      


    let albumes1 = `
    <article class="canciones-detalle" >
    
    <ul class="ul-canciones-detalle">
    <li class="img-detalle">
      <img  src="${imageS}">
    </li>
    <li >
    <h3>Nombre Del Disco: ${nAlbum}</h3>
      <h3>Nombre Del Artista: ${nArtistas}</h3>
      <h3>Duracion: ${Nduration} </h3>
      
    </li>
      
    </ul>
    </article>
    `;


    
    contenedor.innerHTML = albumes1;
    
})
.catch(function (e) {
    console.log(e)
})

fetch(endpointdetallealbum )

.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

    let contenedor = document.querySelector(".jsalbumes-detalle")
    console.log(contenedor);

    let ArrayCanciones = data.genres.data.name

    let albumess = ""


    for(let i = 0; i < ArrayCanciones.length; i++){
      
      
        
  
  
        albumess += `
      <li>
        <h3>Nombre Del Genero: ${ArrayCanciones[id]}</h3> 
      </li>
        
     
      `;
  
      }

      contenedor.innerHTML = albumess;


})