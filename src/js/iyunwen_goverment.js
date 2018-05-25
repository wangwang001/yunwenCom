quick_action_animate($('#goverPain .thumbnail img'));
//政务
//solution_scroll_animate($('#goverPain .thumbnail a'),$('#goverPain .thumbnail a img'));
solution_scroll_animate($('#goverSo1 .col-md-7'),$('#goverSo1 .col-md-7 img'));
solution_scroll_animate($('#goverSo2 .col-md-7'),$('#goverSo2 .col-md-7 img'));
solution_scroll_animate($('#goverSo3 .col-md-7'),$('#goverSo3 .col-md-7 img'));
function quick_action_animate(sub){
    if ($(window).scrollTop() + $(window).height() >= sub.offset().top){
        $.each($('#goverPain .thumbnail img'), function(i, item){
            setTimeout(function(){
                $(item).addClass('professionAni');
            },i*800);
        });
        $('#goverPain .thumbnail img').on('oanimationend animationend webkitAnimationEnd', function(){
            $(this).css('opacity','1');
        })
    }else{
        solution_scroll_animate($('#goverPain .thumbnail a'),$('#goverPain .thumbnail a img'));
    }
}
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
                },i*800);
            });
        }
    })
}