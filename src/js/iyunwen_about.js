    solution_scroll_animate($('.partner .container .col-md-12 .col-md-3'),$('.partner .container .col-md-3 img'));
    solution_scroll_animate($('.industry .container .col-md-12'),$('.industry .container img'));
    solution_scroll_animate($('.technical .container .col-md-12'),$('.technical .container img'));
    clickAnimate()
    var i = 0;
    var size = $(".prize .honor li").length; //6
    /**
     * 图片滚动上浮
    */
    function solution_scroll_animate(parent,sub){
        var windowHeight = $(window).height();
        $(window).on('scroll', function(){
            var scrollHeight = $(this).scrollTop();
            var eleTop = parent.offset().top;
            if(windowHeight + scrollHeight > eleTop){
                $.each(sub, function(i, item){
                    setTimeout(function(){
                        $(item).parent().addClass('professionAni');
                        $(item).css('opacity','1');
                    },i*500);
                });
            }
        })
    }
    /**
     * 点击图片轮播
    */
    function clickAnimate(){
        /*向左按钮*/
        $(".prize .leftArrow").click(function() {
            i--;
            if($(window).width() < 480){
                phoneMove()
            }else{
                pcMove();
            }
        });
        /*向右按钮*/
        $(".prize .rightArrow").click(function () {
            i++;
            if($(window).width() < 480){
                phoneMove()
            }else{
                pcMove();
            }
        });
    }
    /*移动*/
    function pcMove(){
        if (i <= -1) {
            i = 0;
            return;
        }else if (i >= 4) {
            i = 3;
            return;
        }else{
            $(".prize .honor").stop().animate({ left: -(i*390) +'px' },500);
            if(i >= 3){
                $('.prize .container .row .rightArrow').css('opacity','0.5');
            }else if(i <= 0){
                $('.prize .container .row .leftArrow').css('opacity','0.5');
            }else{
                $('.prize .container .row .leftArrow').css('opacity','1');
                $('.prize .container .row .rightArrow').css('opacity','1');
            }
        }
    }
    function phoneMove(){
        if (i <= -1) {
            i = 0;
            return;
        }else if (i >= 6) {
            i = 6;
            return;
        }else{
            $(".prize .honor").stop().animate({ left: -(i*390) +'px' },500);
            if(i >= 5){
                $('.prize .container .row .rightArrow').css('opacity','0.5');
            }else if(i <= 0){
                $('.prize .container .row .leftArrow').css('opacity','0.5');
            }else{
                $('.prize .container .row .leftArrow').css('opacity','1');
                $('.prize .container .row .rightArrow').css('opacity','1');
            }
        }
    }