/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('select').formSelect();
});*/


var db = firebase.firestore();


function selectCasa(){
    let casa = $("input[name=group1]:checked").next().text();
    return casa;
}

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
    creaUsuario();
});

function creaUsuario(){
    var casa = selectCasa();
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var matricula = document.getElementById("matricula").value;
    var carrera = document.getElementById("carrera").value;
    var semestre = document.getElementById("semestre").value;
    var telefono = document.getElementById("telephone").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;
    if (password != rePassword) {
        return;
    }
    //Contraseña convencional = abcd1234
    firebase.auth().createUserWithEmailAndPassword(correo, password).then(function (result) {
      var data = {
          apellido: apellido,
          carrera: carrera,
          casa: casa,
          celular: telefono,
          correo: correo,
          matricula: matricula,
          nombre: nombre,
          semestre: semestre,
          tipo:"alumno"
      };
      console.log(result.user.uid)
      console.log(data);
      db.collection("usuarios").doc(result.user.uid).set(data).then(function() {
          console.log("Datos subidos correctamente.");
      });
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}