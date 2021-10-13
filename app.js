const principal = document.querySelector(".principal");
const apercu = document.querySelector(".apercu");

// fonction miroir//

principal.addEventListener("keyup",function(){
    let result = principal.value;
    apercu.innerHTML = result;
})

// fonction pour le loader , entrée/sortie de l'encart texte//
let loader = document.querySelector(".loader");
    principal.addEventListener('mouseenter',()=> {
        if(getComputedStyle(loader).display != "none"){
            loader.style.display = "block";
          } 
          else {
            loader.style.display = "block";
          }
        })
    principal.addEventListener('mouseout',()=> {
            if(getComputedStyle(loader).display != "none"){
                loader.style.display = "none";
              } 
              else {
                loader.style.display = "none";
              }

});
// compteur de caracteres//
function charcountupdate() {
	let compteur= apercu.innerText.length;
	document.getElementById("charcount").innerText = compteur + ' /200';
  
}
// Bloqueur du nombre de caracteres//
apercu.onkeydown = function(){
  if (compteur >= 200){
return false;
  }
};
//barre de progression//
document.addEventListener('keyup', update ); // addevent listener appelle la fonction update//
function update(){
let percent = document.querySelector(".apercu").innerText.length;
document.getElementById("emptyBar").style.width = percent/2 + "%";

  // Changement des couleurs en fonction de l'avancée de la barre de progression//

if (percent >= 0 && percent <= 99) {
document.getElementById("emptyBar").style.backgroundColor="green";
}
else if (percent >= 100  && percent <= 159){
document.getElementById("emptyBar").style.backgroundColor="orange";  
}
else if (percent >= 160  && percent <= 200){
document.getElementById("emptyBar").style.backgroundColor="red";  
}
}
// bouton gras//

let bold = document.querySelector("#bold");
bold.addEventListener("click",function(){
principal.value = principal.value + "<b></b>"
})

// bouton italic//
let italic = document.querySelector("#italic");
italic.addEventListener("click",function(){
principal.value = principal.value + "<i></i>"
})

//bouton clear//
let clearall = document.querySelector("#clearall");
clearall.addEventListener("click",function(){
principal.value = ""

})

// let darkmode = document.querySelector(".darkmode");
// darkmode.addEventListener("click", function(){
//   link.innerHTML = '<link rel="stylesheet" href ="darkmode.css">';
// })


const switchDarkMode = document.querySelector("#switch");
switchDarkMode.addEventListener("change", function (){
if (switchDarkMode.checked===true){
  link.innerHTML = '<link rel="stylesheet" href ="darkmode.css">'
}
else {
  link.innerHTML = '<link rel="stylesheet" href ="./style.css">'
}

})