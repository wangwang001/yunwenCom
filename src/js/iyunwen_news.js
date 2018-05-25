    
    var i = 0,
        size = $(".carousel .oUl li").length; //4
        clearInterval(t);
    $('.carousel .oUl').width($('.carousel').width()*4);
    
    /*向左按钮*/
    $(".carousel .leftArrow").click(function() {
        i--;
        move();
        tabImg();
    });
    /*向右按钮*/
    $(".carousel .rightArrow").click(function () {
        i++;
        move();
        tabImg();
    });
    /*点击下方图标*/
    $('.carousel .oSpan span').on('click',function(ev){
        i = $(ev.target).index();
        move();
        tabImg();
    })
    
    /*自动轮播*/
    var t = setInterval(show,4000);
    function show(){
        i++;
        move();
        tabImg();
    }
    function tabImg(){
        if(i == (size-1)){
            $('.oSpan').children().removeClass();
            $('.oSpan span').eq(0).addClass('active');
        }else{
            $('.oSpan').children().removeClass();
            $('.oSpan span').eq(i).addClass('active');
        }
    }
    /*移动*/
     function move(){
        if (i == size) {
            $(".carousel .oUl").css({ left: '0' });
                i = 1;
            }
        if (i == -1) {
            $(".carousel .oUl").css({ left: (-(size-1) * $(".carousel .oUl li").eq(i).width())+'px'});
                i = size - 2;
            }
            $(".carousel .oUl").stop().animate({ left: (- i * $(".carousel .oUl li").eq(i).width()) +'px' },
        500);
     }