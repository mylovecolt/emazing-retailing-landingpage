$(function() {

    $(window).scroll(function(){
        const y = window.scrollY;
        if (y > 50) {
            $('#emazing_header').css('background-color','#19234e');
        } else {
            $('#emazing_header').css('background-color','transparent');
        }
        var aTop = $('.ad').height();
        if($(this).scrollTop()>=aTop){
            alert('header just passed.');
            // instead of alert you can use to show your ad
            // something like $('#footAd').slideup();
        }
    });

})