$(document).ready(function() {

   $('#iniciar').click(function() {
     $( '#circulo' ).draggable({ containment: "#circulo".parent });
    pelota();
});

      $('#parar').click(function() {
        $('#circulo').stop();
        });

   function pelota() {
    $('#circulo').animate({left:"92%"},"slow",function(){
        $('#circulo').animate({top: "87%"},"slow",function(){
            $('#circulo').animate({left: '1px'},"slow",function(){
                $('#circulo').animate({top: '1px'},"slow",function(){
                    pelota();
                });
            });
        });
    });
}



});