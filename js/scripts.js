
$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause-circle')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause-circle');
            $('#carouselButton').children('span').addClass('fa-play-circle');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play-circle')){
                $('#mycarousel').carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play-circle');
                $('#carouselButton').children('span').addClass('fa-pause-circle');
        }
    });
        $('#mycarousel').carousel('pause');
});


$(document).ready(function(){
    $("#reservationModalButton").click(function(){
        $("#reservationModal").modal('show');
    });
    $("#loginModalButton").click(function(){
        $("#loginModal").modal('show');
    });
});


