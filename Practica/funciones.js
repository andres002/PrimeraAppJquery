$(document).ready(function() {

     $('#iniciar').click(function() {
        pelota();
     });

    function pelota() {
        $('#circulo').animate({'marginLeft' : "+=92%"},"slow",function(){
            $('#circulo').animate({'marginTop' : "+=57%"},"slow",function(){
                $('#circulo').animate({'marginLeft' : "-=92%"},"slow",function(){
                    $('#circulo').animate({'marginTop' : "-=57%"},"slow",function(){
                        pelota();
                   });
               });
           });
        });
    }
});