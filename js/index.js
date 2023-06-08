// Agregar endpoint de deezer para el buscador 
window.onload = function() {
    let queryString = new URLSearchParams(location.search); //Esto significa todo el querystring, es decir: buscar="cualquier cosa que hayamos buscado"
    queryString.get("buscar")

    console.log(queryString);
}


  
let Letrita = document.querySelector("a")


Letrita.addEventListener('mouseover', function() {

    Letrita.style.color = 'blue'
  });



Letrita.addEventListener('mouseout', function(e) {

    Letrita.style.color = 'black'
});

console.log()