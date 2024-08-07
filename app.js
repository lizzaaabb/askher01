const yes = document.getElementById("yes")
const no = document.getElementById("no")
const ok = document.getElementById("ok")
const alert = document.getElementById("alert")

let yesScale = 1;
let noScale = 1;

yes.onclick = function(){
    alert.style.display = "flex";
}
ok.onclick = function(){
    alert.style.display = "none";
}

no.addEventListener("click", function(){
    yesScale += 0.1;
    noScale -=0.1;

    yes.style.transform = `scale(${yesScale})`;
    no.style.transform = `scale(${noScale})`;
})