// Agregar endpoint de deezer para el buscador 
window.onload = function() {
    let queryString = new URLSearchParams(location.search); //Esto significa todo el querystring, es decir: buscar="cualquier cosa que hayamos buscado"
    queryString.get("buscar")

    console.log(queryString);
}


  