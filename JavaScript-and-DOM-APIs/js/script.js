window.addEventListener("load",showHiddenSection);//this event happens when the content of the page is fully-loaded 


let btn = document.getElementById('event');
btn.addEventListener("click",chuckNorrisJokes);
let config = {url: 'http://api.icndb.com/jokes/random' ,};

function showHiddenSection() {// switch clases
    let Change = document.querySelector(".hidden");
    Change.className = "showme";
}

function showAlert(){ //alert requested in Ej 2.2
    alert("stop");
}

function chuckNorrisJokes(){//Bring a JSON from API 
    fetch(config.url)
    .then(function(r){
        if(!r.ok){
            console.log("error");
        }
        return r.json()
    })
    .then(function(json){//I print the JSON jokes in the section.
        let contenedor = document.querySelector("#result");
        contenedor.innerHTML ='';
        contenedor.innerHTML += json.value.joke;
    })
    .catch(function(e){//If a server error occurs section content must turn red
        console.log(e)
        let Change = document.querySelector(".hidden");
        Change.classList.add("WarningShowme");
    })
}