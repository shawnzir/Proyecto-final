window.onload = function() {
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(informacion) {
        console.log(informacion.data)

        for(let i = 1; i < informacion.data.length; i++){

            let gif = "<p>" + informacion.data[i].name + "</p>";
            gif += "<img src=" + informacion.data[i].picture + ">"

            document.querySelector("#apisaqui").innerHTML += "<li>" + gif + "</li>"
        }
    })
}