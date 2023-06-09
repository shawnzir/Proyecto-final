// Agregar endpoint de deezer para el buscador 
window.onload = function() {
    let queryString = new URLSearchParams(location.search); //Esto significa todo el querystring, es decir: buscar="cualquier cosa que hayamos buscado"
    queryString.get("buscar")

    console.log(queryString);
}


  
let Letrita = document.querySelector("a")


Letrita.addEventListener('mouseover', function() {

    Letrita.style.color = '#979594'
  });



Letrita.addEventListener('mouseout', function(e) {

    Letrita.style.color = 'black'
});

console.log()



// Buscador que ande 

let form = document.querySelector('form')
let inputdebusqueda= document.querySelector('input')

form.addEventListener('submit', function(e){
e.preventDefault()

if(inputdebusqueda.value.length < 2){

    alert("El campo tiene menos de 3 carateres, porfavor ingrese de vuelta su busqueda")
    


} else {
    this.submit()
}
})


let urlm = "" //poner url

fetch(urlm)
.then(function (response) {
    return response.json()
})

.then(function (data){

    let packcanciones= data.track.data;
    console.log(packcanciones)

 //   let listadecanciones= document.querySelector(".secanciones")
 //   let canciones = ""
 //   for(let i=0; i< 5; i++){
//
//        canciones += `<article class="bloque-canciones">
//        <h3> <a class="nombrecancion" href=""></a>Nombre cancion</h3>
//    <img src="" alt="">
//    <article class="bl-nombrec">
//    <a href="">Nombre album</a>
//    <a href="">Nombre artista</a>
//    </article>
//    </article>`
//    }
    
})
