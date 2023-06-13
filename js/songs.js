let urlsongs = "https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/chart "
    fetch(urlsongs) // Usamos fetch ya que nos permite consultar un recurso de forma asincronica, es decir, iniciar una accion sin depender de la finalizacion de acciones anteriores.
    .then(function(respuesta){ // En este caso el parametro "(response)" es el que recibe la informacion del endpoint, obtenida por el fetch.
        return respuesta.json(); // Utiilizamos el metodo "json()" con el fin de decodificar la informacion obtenida por el fetch y poder utilizarla en forma de arrays, objetos, etc... Al ser su proceso asincronico, necesitamos de otra promesa, es decir, un segundo "then"
    })
    .then(function(informacion) { // El parametro "informacion", recibe la informacion decodificada gracias al primer then. Dentro de esta funcion escribiremos el codigo para poder trabajar con la informacion obtenida del API.
        console.log(informacion.data)

        for(let i = 0; i < informacion.data.length; i++){
            let songs = "<h2>" + informacion.data[i].name + "</h2>";
            songs += "<img src=" + informacion.data[i].picture_big + ">"

    generos.style.color = 'black'
        }});

// Hasta aca van los Hover del "a".