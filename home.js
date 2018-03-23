$(document).ready(function(){

        $("#home_one").click(function(){
        	debugger
            $("#two").hide();
            $(".homepage").show();
        });
        $("#about_two").click(function(){
        	debugger
            $(".homepage").hide();
            $("#two").show();
        });
        $("#get").click(function(){
            $("#two").show();
            $(".homepage").hide();
        });
        $("#info").click(function(){
            $("#two").show();
            $(".homepage").hide();
        });

        $("#info1").click(function(){
            $("#two").show();
            $(".homepage").hide();
        });

        $("#info2").click(function(){
            $("#two").show();
            $(".homepage").hide();
        });
    });

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
            } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},8000);
        return false;
    });
});

$(document).ready(function () {
    $("#btnsearch").on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        /* Check if field is already displayed, if not, displays it, else, submit */
        if($('#search_container').hasClass('closed')){
            $('#search_container').toggleClass('closed');
            $('#search').animate({
                right: '40px',
            }, 200, function(){
   
                $(document).one('click', function(){
                    $('#search_container').toggleClass('closed');
                    $('#search').animate({
                        right: '-200px',
                    }, 200);
                    
                    $('#hint').html('');
                });   
            });
        }
    });
    
    $('#search').on('click',function(e){
        /* Needed to avoid closing field when clicking on it */
        e.preventDefault();
        e.stopPropagation();
    });
});