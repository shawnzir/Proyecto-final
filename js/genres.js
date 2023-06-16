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

   let urlGeneros = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre" // Esta ruta se conoce como endpoint. De aqui sacaremos toda la informacion que necesitemos.
   
    fetch(urlGeneros) // Usamos fetch ya que nos permite consultar un recurso de forma asincronica, es decir, iniciar una accion sin depender de la finalizacion de acciones anteriores.
    .then(function(respuesta){ // En este caso el parametro "(response)" es el que recibe la informacion del endpoint, obtenida por el fetch.
        return respuesta.json(); // Utiilizamos el metodo "json()" con el fin de decodificar la informacion obtenida por el fetch y poder utilizarla en forma de arrays, objetos, etc... Al ser su proceso asincronico, necesitamos de otra promesa, es decir, un segundo "then"
    })
    .then(function(informacion) { // El parametro "informacion", recibe la informacion decodificada gracias al primer then. Dentro de esta funcion escribiremos el codigo para poder trabajar con la informacion obtenida del API.
        console.log(informacion.data)

        for(let i = 1; i < informacion.data.length; i++){

            let genre ="<a href='./detail-genres.html'>"+ "<h2>" + informacion.data[i].name + "</h2>"+"</a>";
            genre += "<a href='./detail-genres.html'>"+"<img src=" + informacion.data[i].picture_medium + ">"+"</a>"

            document.querySelector(".content").innerHTML += "<article class='Generos-data'>" + genre + "</article>"
        }
    })
    .catch(function(error) {
        console.log("Error:", error);
    })
    
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }


