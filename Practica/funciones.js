$(document).ready(function() {

   $('#iniciar').click(function() {
    pelota();
});

      $('#parar').click(function() {
        $('#circulo').stop();
        });

   function pelota() {
    $('#circulo').animate({left:"87%"},"slow",function(){
        $('#circulo').animate({top: "83%"},"slow",function(){
            $('#circulo').animate({left: '5px'},"slow",function(){
                $('#circulo').animate({top: '5px'},"slow",function(){
                    pelota();
                });
            });
        });
    });
}


function guarda_datos(){
    var nombre = document.getElementById("name").value;
    var date = document.getElementById("date").value;

    document.getElementById("name").value = "";
    document.getElementById("date").value = "";

    document.getElementById('nombre').innerHTML="Nombre: "+nombre;
    document.getElementById('fecha').innerHTML="Fecha: "+date;

}

$("#datos").resizable({containment:"parent"});
$("#aceptar").click(()=>{
    $("#nombre").empty();
    $("fecha").empty();
    var name = $("#name").val();
    var date =  $("#date").val();
    $("#nombre").append("Nombre: " + name);
    $("#fecha").append("Fecha: " + date);


    console.log($("#name").attr("value"));

})

$("#name").tooltip({
    altField: "#actualDate"
});

$("#date").tooltip({
    altField: "#actualDate"
});

var date =  $("#date").val();


$("#mostrar").click(function(){
        $("#figura_1").fadeIn(3000);
        $("#figura_2").fadeIn(2000);
        $("#figura_3").fadeIn(1000);
      });

    $("#ocultar").click(function(){
        $("#figura_1").fadeOut(1000);
        $("#figura_2").fadeOut(2000);
        $("#figura_3").fadeOut(3000);
      }); 

$("#creditos").hover(function(){
    $("#creditos").animate({left: '80%'},"slow");
}, ()=>{
    $("#creditos").animate({left: '95%'},"slow");
});



$("#date").datepicker();
$( "#datos" ).draggable();



});