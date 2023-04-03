function ocultarTextArea() {
    var textarea = document.getElementById("miTextArea");
    textarea.style.display = "none";
  }
  
  function mostrarTextArea() {
    var textarea = document.getElementById("miTextArea");
    textarea.style.display = "block";
    textarea.style.backgroundColor="black";
    textarea.style.color="white";
  }
  
  window.addEventListener("load", function() {
    var mensaje = document.getElementById("mensaje");
    var textarea = document.getElementById("miTextArea");
    
    ocultarTextArea();
    mensaje.classList.remove("oculto");
  });
  
  document.addEventListener("click", function() {
    var mensaje = document.getElementById("mensaje");
    var textarea = document.getElementById("miTextArea");
    
    mensaje.classList.add("oculto");
    mostrarTextArea();
  });
  