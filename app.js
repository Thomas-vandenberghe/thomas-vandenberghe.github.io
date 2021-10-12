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

let btn = document.getElementById("bold");

btn.addEventListener("click", function(){
apercu.classList.toggle("bold");
});