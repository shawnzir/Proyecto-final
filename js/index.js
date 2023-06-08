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

