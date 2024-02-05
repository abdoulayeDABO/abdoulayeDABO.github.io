$(document).ready(function(){

    $(window).on('scroll', function(){     
        if ($(window).scrollTop() > 100){
            $( ".to-top" ).css( "display", "block" );
        }else{
            $( ".to-top" ).css( "display", "none" );
        }
    });

    $( ".to-top" ).click( function(){
        $("html, body").animate( 
            { scrollTop: "0" }, 300); 
    });

    $( "#tabs" ).tabs();
    // $(".content").style.maxHeight = this.scrollHeight + "px";


    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";

            }
        });
    }


  });




