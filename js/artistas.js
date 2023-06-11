// Hover de HOME

let home4 = document.querySelector(".navIndex")


home4.addEventListener('mouseover', function() {
    
    home4.style.color = '#979594'
  });

home4.addEventListener('mouseout', function() {

    home4.style.color = 'black'
});

// Hover de Canciones

let playlist4 = document.querySelector(".navPlaylist")

playlist4.addEventListener('mouseover', function() {

    playlist4.style.color = '#979594'
  });

playlist4.addEventListener('mouseout', function() {

    playlist4.style.color = 'black'
});

// Hover de Generos

let generos4 = document.querySelector(".navGenres")

generos4.addEventListener('mouseover', function() {

    generos4.style.color = '#979594'
  });

generos4.addEventListener('mouseout', function() {

    generos4.style.color = 'black'
});

// Hasta aca van los Hover del "a".
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists") // Usamos fetch ya que nos permite consultar un recurso de forma asincronica, es decir, iniciar una accion sin depender de la finalizacion de acciones anteriores.
    .then(function(respuesta){ // En este caso el parametro "(response)" es el que recibe la informacion del endpoint, obtenida por el fetch.
        return respuesta.json(); // Utiilizamos el metodo "json()" con el fin de decodificar la informacion obtenida por el fetch y poder utilizarla en forma de arrays, objetos, etc... Al ser su proceso asincronico, necesitamos de otra promesa, es decir, un segundo "then"
    })
    .then(function(informacion) { // El parametro "informacion", recibe la informacion decodificada gracias al primer then. Dentro de esta funcion escribiremos el codigo para poder trabajar con la informacion obtenida del API.
        console.log(informacion.data)

        for(let i = 0; i < informacion.data.length; i++){
            let artist = "<h2>" + informacion.data[i].name + "</h2>";
            artist += "<img src=" + informacion.data[i].picture_big + ">"

            document.querySelector(".contenedor").innerHTML += "<article>" + artist + "</article>"
        }
    })
    .catch(function(error) {
        console.log("Error:", error);
    })

