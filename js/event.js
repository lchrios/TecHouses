$(document).ready(function(){
    $('.datepicker').datepicker();
});

$(document).ready(function() {
    $('textarea2').characterCounter();
})

$(document).ready(function(){
    $('.timepicker').timepicker();
});

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
    creaEvento();
});

function creaEvento() {
    var titulo = document.getElementById("titulo").value;

}