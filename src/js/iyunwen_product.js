$(document).ready(function(){
    var wow = new WOW({boxClass: 'wow'});
    wow.init();
    $(window).resize(function(){
        $(".product-container .productList .col-md-2").each(function() {
            $(this).children(".upper").css("left", ($(this).width() - $(this).children(".upper").width()) / 2)
        })
    })
    solution_scroll_animate($('.feature-container .col-md-5').eq(0),$('.feature-container .col-md-5 img').eq(0));
    solution_scroll_animate($('.feature-container .col-md-5').eq(1),$('.feature-container .col-md-5 img').eq(1));
    solution_scroll_animate($('.feature-container .col-md-5').eq(2),$('.feature-container .col-md-5 img').eq(2));
    solution_scroll_animate($('.feature-container .col-md-5').eq(3),$('.feature-container .col-md-5 img').eq(3));
    solution_scroll_animate($('.feature-container .col-md-5').eq(4),$('.feature-container .col-md-5 img').eq(4));
    solution_scroll_animate($('.feature-container .col-md-5').eq(5),$('.feature-container .col-md-5 img').eq(5));
    solution_scroll_animate($('.feature-container .col-md-5').eq(6),$('.feature-container .col-md-5 img').eq(6));
    product_animate()
    /**图片上浮方法*/
    function solution_scroll_animate(parent,sub){
        var windowHeight = $(window).height();
        $(window).on('scroll', function(){
            var scrollHeight = $(this).scrollTop();
            var eleTop = parent.offset().top;
            if(windowHeight + scrollHeight > eleTop){
                $.each(sub, function(i, item){
                    setTimeout(function(){
                        $(item).addClass('professionAni');
                        $(item).css('opacity','1');
                    },i*500);
                });
            }
        })
    }
    /**鼠标滑过文字上浮*/
    function product_animate(){
        $('.productList .col-md-2').on('mouseover',function(){
            var i = this;
            $(i).children('.paragraph').stop().animate({
                top: "60%",
                opacity:'1'
            }, 200),$(i).children(".upper").stop(!0).animate({
                top: "8%"
            }, 300).animate({
                top: "10%"
            }, 150)
        })
        $('.productList .col-md-2').on('mouseleave',function(){
            var i = this;
            $(i).children(".paragraph").stop().animate({
                top: "100%",
                opacity:'0'
            }, 225),$(i).children(".upper").stop(!0).animate({
                top: "22%"
            }, 300).animate({
                top: "20%"
            }, 150)
        })
    }
})