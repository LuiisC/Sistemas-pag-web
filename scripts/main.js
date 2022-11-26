
function ampliar(num) {
    id = "img"+num;
    imagen = document.getElementById(id);
    imagen.style.width = "80%";
    imagen.style.height = "80%";
    imagen.style.transition = "width 0.5s ease";

    let boton =  document.getElementById(num);
    boton.style.display="block"
    //document.querySelector('button').style.display="block";

}
function resetImg(num){
    imagen.style.width = "25%";
    imagen.style.height = "25%";
    imagen.style.transition = "width 0.5s ease";

    let boton =  document.getElementById(num);
    boton.style.display="none"

    //document.querySelector('button').style.display="none";
}