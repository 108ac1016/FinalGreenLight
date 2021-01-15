
$(document).ready(function(){

    var image = new Array();
    var hamburger = false;

    for(var i = 0;i < 4;i++){
        image[i] = new Image();
    }
    image[0].src = "mat/btn/but1-3.png";
    image[1].src = "mat/btn/but2-3.png";
    image[2].src = "mat/btn/but3-3.png";
    image[3].src = "mat/btn/but4-3.png";

    // mainpage
    $('#ham_button').click(function(){
        if(!hamburger){
            hamburger = true;
            $('#ham_image').attr("src", "mat/close.png"),
            $('header').css("height", "270px"),
            $('.bar').css("display", "block"),
            $('.menu').css("display", "block");
        }
        else{
            hamburger = false;
            $('#ham_image').attr("src", "mat/hamburger.png"),
            $('header').css("height", "60px"),
            $('.bar').css("display", "none"),
            $('.menu').css("display", "none");
        }
        
    });
    // slick
    $('.panel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    });
    $('#dining').click(function(){
        $('aside').html('<div class="panel">'
        + '<img src="mat/atmos/01.JPG" alt="用餐環境">'
        + '<img src="mat/atmos/02.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/03.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/04.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/05.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/06.jpg" alt="用餐環境">'
        + '</div>')
        $('.panel').slick({
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1
        })
    });
    
});