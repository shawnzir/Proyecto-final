// Hover de HOME

let home3 = document.querySelector(".navIndex")


home3.addEventListener('mouseover', function() {
    
    home3.style.color = '#979594'
  });

home3.addEventListener('mouseout', function() {

    home3.style.color = 'black'
});

// Hover de Canciones

let playlist3 = document.querySelector(".navPlaylist")

playlist3.addEventListener('mouseover', function() {

    playlist3.style.color = '#979594'
  });

playlist3.addEventListener('mouseout', function() {

    playlist3.style.color = 'black'
});

// Hover de Generos

let generos3 = document.querySelector(".navGenres")

generos3.addEventListener('mouseover', function() {

    generos3.style.color = '#979594'
  });

generos3.addEventListener('mouseout', function() {

    generos3.style.color = 'black'
});

// Hasta aca van los Hover del "a".

// buscador 

let form = document.querySelector('form')
let inputdebusqueda= document.querySelector('input')

form.addEventListener('submit', function(e){
e.preventDefault()

if(inputdebusqueda.value.length === 0 ){

    alert("El campo esta vacio, por favor ingrese de vuelta su busqueda")

    } 
  
  else {

  if(inputdebusqueda.value.length < 3){

    alert("El campo tiene menos de 3 carateres, por favor ingrese de vuelta su busqueda")

  }
  else { 
      
      this.submit() 
  
  }
}
})



// buscador



   let urlGeneros = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre" // Esta ruta se conoce como endpoint. De aqui sacaremos toda la informacion que necesitemos.
   
    fetch(urlGeneros) // Usamos fetch ya que nos permite consultar un recurso de forma asincronica, es decir, iniciar una accion sin depender de la finalizacion de acciones anteriores.
    .then(function(respuesta){ // En este caso el parametro "(response)" es el que recibe la informacion del endpoint, obtenida por el fetch.
        return respuesta.json(); // Utiilizamos el metodo "json()" con el fin de decodificar la informacion obtenida por el fetch y poder utilizarla en forma de arrays, objetos, etc... Al ser su proceso asincronico, necesitamos de otra promesa, es decir, un segundo "then"
    })
    .then(function(informacion) { // El parametro "informacion", recibe la informacion decodificada gracias al primer then. Dentro de esta funcion escribiremos el codigo para poder trabajar con la informacion obtenida del API.
        console.log(informacion.data)

        

        for(let i = 1; i < informacion.data.length; i++){

            let detaAr = informacion.data[i].id
            let pic = informacion.data[i].picture_medium
            let nombreg = informacion.data[i].name


            let genre = `<article class="artistas">
            <a href="./detalle-generos.html?id=${detaAr}">
            <ul class="ul-artistas">
            <li>
            <h4>${nombreg}</h4>
            <img src="${pic}"> 
            </li>
            </ul>
            </a>
            </article>`

            document.querySelector(".content").innerHTML += "<article class='Generos-data'>" + genre + "</article>"
        }
    })
    .catch(function(error) {
        console.log("Error:", error);
    })

    function myFunction() {
        let element = document.body;
        element.classList.toggle("dark-mode");
      }


