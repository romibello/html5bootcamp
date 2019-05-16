window.addEventListener("load",showHiddenSection);//this event happen when the content of the page is fully-loaded 


// ************************************************* call functions **************************************************

let config = {url: 'http://api.icndb.com/jokes/random' ,};//jokes url

let btn = document.getElementById('event');
btn.addEventListener("click",chuckNorrisJokes);

let configWithParam = {//for the api with parameters
    url: 'https://api.github.com/search/repositories' ,
    text: '?q='+'JavaScript'        
};

let request

let btn2 = document.getElementById('send');
btn2.addEventListener("click",getResponseFromApiWithParameters);

let expenses = [
    ["classic kitchen roll", "$66", "14/05/2019"],
    ["beer can", "$45", "27/05/2019"],
    ["vegetables", "$90", "27/05/2019"],
    ["rice", "$45", "27/05/2019"]
];

createTable(expenses);


// ************************************************* call functions **************************************************

// ************************************************* functions *******************************************************

function showHiddenSection() {// switch clases
    let Change = document.querySelector(".hidden");
    Change.className = "showme";
}

function showAlert(){ //alert requested in Ej 2.2
    alert("stop");
}

function getResponseParam(){// reusable function
    fetch( request )
    .then(function(r){
        if(!r.ok){
            console.log("error");
        }
        return r.json()
    })
    .then(function(json){
        console.log("create list");
        document.getElementById("contentList").appendChild(createLists(json));
    })
    .catch(function(e){//If a server error occurs section content must turn red
        console.log(e)
        let Change = document.querySelector(".hidden");
        Change.classList.add("WarningShowme");
    })
  
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

function getResponseFromApiWithParameters(){// if the input text "search" is modified then start the search with the new value
    if(document.getElementById('search').value.length == 0){
        alert("text field is empty");
    }else{
        configWithParam.text = '?q='+ document.getElementById('search').value;
        request = new Request( configWithParam.url+configWithParam.text );
        let conteinerList = document.getElementById("contentList");
        if (conteinerList.childElementCount >1){//clears previous results.
            conteinerList.lastChild.remove();
        }
        getResponseParam();
    }
}

function createLists(data){//create and add the list
    let lista = document.createElement('ul');
    data.items.forEach(item => {
      let element = document.createElement('li');
      let name = document.createTextNode(item.url);
      element.appendChild(name)
      lista.appendChild(element);
    });
    return lista
}

//
function createTable(matrix) {
 let tableSection = document.querySelector(".table-container");
 let table = document.createElement("table");
 tableSection.appendChild(table);
 matrix.forEach((item) => {
   let tr = document.createElement("tr");
   table.appendChild(tr);
   item.forEach(element => {
     let td = document.createElement("td");
     let tdText = document.createTextNode(element);
     td.appendChild(tdText);
     tr.appendChild(td);
   });
 });
 table.classList.add("table");
}


// ************************************************* functions *******************************************************