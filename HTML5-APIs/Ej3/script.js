
/*****************************************Web socket*****************************************************/

var wsUri = "wss://echo.websocket.org/";
var output;
var btnConnect;
var btnClose;

function init()
{
  output = document.getElementById("output");
  btnConnect = document.getElementById("connect-btn");
  btnClose = document.getElementById("close-btn");
  btnConnect.addEventListener("click",testWebSocket);
  btnClose.addEventListener("click",onClose);
}

function testWebSocket()
{
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
  writeToScreen("CONNECT");
  doSend("WebSocket rocks");
}

function onClose(evt)
{
  writeToScreen("DISCONNECTED");
  websocket.onclose = function(evt) { onMessage(evt) };
}

function onMessage(evt)
{
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
  websocket.close();
}

function onError(evt)
{
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message){
  writeToScreen("SENT: " + message);
  websocket.send(message);
}

function writeToScreen(message)
{
  var pre = document.createElement("p");
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);

/*****************************************Web socket*****************************************************/