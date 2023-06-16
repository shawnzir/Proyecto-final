// Hover de HOME

let home7 = document.querySelector(".navIndex")


home7.addEventListener('mouseover', function() {
    
    home7.style.color = '#979594'
  });

home7.addEventListener('mouseout', function() {

    home7.style.color = 'black'
});

// Hover de Canciones

let playlist7 = document.querySelector(".navPlaylist")

playlist7.addEventListener('mouseover', function() {

    playlist7.style.color = '#979594'
  });

playlist7.addEventListener('mouseout', function() {

    playlist7.style.color = 'black'
});

// Hover de Generos

let generos7 = document.querySelector(".navGenres")

generos7.addEventListener('mouseover', function() {

    generos7.style.color = '#979594'
  });

generos7.addEventListener('mouseout', function() {

    generos7.style.color = 'black'
});

// Hasta aca van los Hover del "a".


// detalles


let qs =location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id')

let endPointartistdetalle= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`



fetch(endPointartistdetalle)

.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

//falta terminar 

    let busq =  

    // esta todo linkiado, solo falta mostrarlo por pantalla
      
     
      
    
  

    document.querySelector(".jsdetailcan").innerHTML = busq;

     
})
.catch(function (e) {
    console.log(e)
})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



// si el array viene basyo podess con inner tex y if poner esto no tiene resultados











// detalles