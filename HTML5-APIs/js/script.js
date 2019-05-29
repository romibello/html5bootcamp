/*****************************************check*****************************************************/
window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;

if (window.File && window.FileReader && window.FileList && window.Blob) {
  //alert("Great success! All the File APIs are supported.");
} else {
  alert('The File APIs are not fully supported in this browser.');
}
/*****************************************check*****************************************************/
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
  if(file){
    let val = File.value;
    alert("valooor: " + val);
  }
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

/******************************************* Drag and drop *********************************************/

var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.

  // files is a FileList of File objects. List some properties.
  var output = [];
  var reader = new FileReader();
  let read = files[0];
  text.value = '';
  reader.readAsText(read);
  reader.onloadend = function() {
    text.value = reader.result;    
  }

}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}


/*****************************************functions*****************************************************/
