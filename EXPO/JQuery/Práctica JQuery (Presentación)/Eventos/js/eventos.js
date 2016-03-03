
$(document).ready(function(){

    $("#codigo1").hide();
    $("#codigo2").hide();
    $("#codigo3").hide();
    $("#codigo4").hide();
    $("#codigo5").hide();
    
    $("#eve1").on({
        click: function(){
            $("#codigo1").show("slow");
        },  
        dblclick: function(){
            $("#codigo1").hide("slow");
        }
    });
    
    $("#eve2").on({
        click: function(){
            $("#codigo2").show("slow");
        },  
        dblclick: function(){
            $("#codigo2").hide("slow");
        }
    });
    
    $("#eve3").on({
        mouseenter: function(){
            $("#codigo3").show("slow");
        },  
        mouseleave: function(){
            $("#codigo3").hide("slow");
        }
    });
    
    $("#eve4").on({
        mouseenter: function(){
            $("#codigo4").show("slow");
        },  
        mouseleave: function(){
            $("#codigo4").hide("slow");
        }
    });
    
    $("#eve5").hover(function(){
            $("#codigo5").show("slow");
        },function(){
            $("#codigo5").hide("slow");
    });
    
    $(function(){
       $("#eve5").draggable(); 
    });
});