/*****************************************variables*****************************************************/

let text = document.getElementById("textArea");

let save = document.getElementById("save");
save.addEventListener("click" , saveText);

let clear = document.getElementById("clear");
clear.addEventListener("click" , deleteText); 

/*****************************************variables*****************************************************/
/*****************************************functions*****************************************************/

function saveText() {
  window.localStorage.setItem('Info', text.value);
  addDBElement();
}

function deleteText() {
  window.localStorage.clear();
  removeDBElement();
}


let db;
let request = indexedDB.open("Topic4DB",3);
request.onupgradeneeded = function() {//database is created
  db = request.result;
  request.onsuccess = function() {
    db = request.result;  
  };
  let store = db.createObjectStore("Topic4DB",{autoIncrement: true});
};


//add element to the DB
function addDBElement(){  
  let objectStore = db.transaction("Topic4DB","readwrite").objectStore("Topic4DB");
  objectStore.add({Info: text.value});
}
//clear the DB 
function removeDBElement(){  
  let objectStore = db.transaction("Topic4DB","readwrite").objectStore("Topic4DB");
  objectStore.clear();
}
 
/*****************************************functions*****************************************************/
