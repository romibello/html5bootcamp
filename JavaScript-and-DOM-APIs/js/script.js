window.addEventListener("load",showHiddenSection);
window.addEventListener("click",showAlert);

function showHiddenSection() {
    // switch screens
    let Change = document.querySelector(".hidden");
    Change.className = "showme";
}

function showAlert(){
    alert("stop");
}