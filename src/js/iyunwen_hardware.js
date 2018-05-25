quick_action_animate($('#hardwareSo1 .col-md-6 img'))
//硬件
//solution_scroll_animate($('#hardwareSo1 .col-md-6'),$('#hardwareSo1 .col-md-6 img'));
solution_scroll_animate($('#hardwareSo2 .col-md-5'),$('#hardwareSo2 .col-md-5 img'));
function quick_action_animate(sub){
    if ($(window).scrollTop() + $(window).height() >= sub.offset().top){
        $.each($('#hardwareSo1 .col-md-6 img'), function(i, item){
            setTimeout(function(){
                $(item).addClass('professionAni');
            },i*800);
        });
        $('#hardwareSo1 .col-md-6 img').on('oanimationend animationend webkitAnimationEnd', function(){
            $(this).css('opacity','1');
        })
    }else{
        solution_scroll_animate($('#hardwareSo1 .col-md-6'),$('#hardwareSo1 .col-md-6 img'));
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