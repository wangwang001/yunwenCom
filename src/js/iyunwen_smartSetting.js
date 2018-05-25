quick_action_animate($('#smartPain .thumbnail a img'))
//企业助手
//solution_scroll_animate($('#smartPain .thumbnail a'),$('#smartPain .thumbnail a img'));
solution_scroll_animate($('#smartSo1 .col-md-7'),$('#smartSo1 .col-md-7 img'));
solution_scroll_animate($('#smartSo2 .col-md-7'),$('#smartSo2 .col-md-7 img'));
solution_scroll_animate($('#smartSo3 .col-md-6'),$('#smartSo3 .col-md-6 img'));
function quick_action_animate(sub){
    if ($(window).scrollTop() + $(window).height() >= sub.offset().top){
        $.each($('#smartPain .thumbnail a img'), function(i, item){
            setTimeout(function(){
                $(item).addClass('professionAni');
            },i*800);
        });
        $('#smartPain .thumbnail a img').on('oanimationend animationend webkitAnimationEnd', function(){
            $(this).css('opacity','1');
        })
    }else{
        solution_scroll_animate($('#smartPain .thumbnail a'),$('#smartPain .thumbnail a img'));
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