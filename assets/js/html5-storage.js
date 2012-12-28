function storeUserScribble(id) {
  var scribble = document.getElementById('scribble').innerHTML;
  localStorage.setItem('userScribble',scribble);
}

function getUserScribble() {
  if ( localStorage.getItem('userScribble')) {
    var scribble = localStorage.getItem('userScribble');
  }
  else {
    var scribble = 'Pon aquí tus anotaciones... Gracias a esta característica de HTML5 se guardarán y podrás volver a editarlas cuando vuelvas a visitar la página... Solo tú accedes a esa información...';
  }
  document.getElementById('scribble').innerHTML = scribble;
}

function clearLocal() {
  clear: localStorage.clear(); 
  return false;
}
