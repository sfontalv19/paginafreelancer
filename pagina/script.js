function dirigir(){
    
    var formulario = document.getElementById("formulario");

    formulario.scrollIntoView();


}
document.addEventListener("DOMContentLoaded", dirigir);


function dirigirQuien(){
    const sobreMI = document.getElementById('quien');

    sobreMI.scrollIntoView();

}
document.addEventListener('DOMContentLoaded', dirigirQuien)


// darle estilo a la ventana de mi titulo
let previousTitle = document.title; 

window.addEventListener('blur', () => {
    previousTitle = document.title; 
    document.title = "No te vayas, vuelve 😥"; 
});

window.addEventListener('focus', () => {
    document.title = previousTitle; 
});