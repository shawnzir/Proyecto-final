// Hover de HOME

let home = document.querySelector(".navIndex")


home.addEventListener('mouseover', function() {
    
    home.style.color = '#979594'
  });

home.addEventListener('mouseout', function() {

    home.style.color = 'black'
});

// Hover de Canciones

let canciones = document.querySelector(".navSongs")

canciones.addEventListener('mouseover', function() {

    canciones.style.color = '#979594'
  });

canciones.addEventListener('mouseout', function() {

    canciones.style.color = 'black'
});

// Hover de Generos

let generos = document.querySelector(".navGenres")

generos.addEventListener('mouseover', function() {

    generos.style.color = '#979594'
  });

generos.addEventListener('mouseout', function() {

    generos.style.color = 'black'
});

// Hover de Artistas

let artistas = document.querySelector(".navArtists")

artistas.addEventListener('mouseover', function() {

    artistas.style.color = '#979594'
  });

artistas.addEventListener('mouseout', function() {

    artistas.style.color = 'black'
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
            genre += "<a href='./detail-genres.html'>"+"<img src=" + informacion.data[i].picture_big + ">"+"</a>"

            document.querySelector(".content").innerHTML += "<article class='data'>" + genre + "</article>"
        }
    })
    .catch(function(error) {
        console.log("Error:", error);
    })


