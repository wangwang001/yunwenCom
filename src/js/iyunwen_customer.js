clickAni($('#online .thumbnail img'),$('#online .solutionOne .col-md-7 img'),$('#online .solutionTwo .col-md-7 img'),$('#online .solutionThree .col-md-7 img'))

// loadSolution($('#online .solutionTwo .col-md-7 img'))
// loadSolution($('#online .solutionThree .col-md-7 img'))
$('.customerBanner li').eq(0).on('click', function () {
    clickAni($('#online .thumbnail img'))
    $('div,a,img').removeClass('professionAni')
})
$('.customerBanner li').eq(1).on('click', function () {
    clickAni($('#finance .thumbnail img'),$('#finance .solutionOne .col-md-7 img'),$('#finance .solutionTwo .col-md-7 img'),$('#finance .solutionThree .col-md-6 img'))
    solution_scroll_animate($('#finance .thumbnail a'),$('#finance .thumbnail a img'))
    solution_scroll_animate($('#finance .solutionOne .col-md-7'), $('#finance .solutionOne .col-md-7 img'));
    solution_scroll_animate($('#finance .solutionTwo .col-md-7'), $('#finance .solutionTwo .col-md-7 img'));
    solution_scroll_animate($('#finance .solutionThree .col-md-6'), $('#finance .solutionThree .col-md-6 img'));
    $('div,a,img').removeClass('professionAni')
})
$('.customerBanner li').eq(2).on('click', function () {
    clickAni($('#it .media .media-middle img'),$('#it .solutionOne .col-md-7 img'),$('#it .solutionTwo .col-md-7 img'))
    solution_scroll_animate($('#it .media .media-middle'),$('#it .media .media-middle img'))
    solution_scroll_animate($('#it .solutionOne .col-md-7'), $('#it .solutionOne .col-md-7 img'));
    solution_scroll_animate($('#it .solutionTwo .col-md-7'), $('#it .solutionTwo .col-md-7 img'));
    $('div,a,img').removeClass('professionAni')
})
$('.customerBanner li').eq(3).on('click', function () {
    clickAni($('#education .media .media-middle img'),$('#education .solutionOne .col-md-7 img'),$('#education .solutionTwo .col-md-7 img'),$('#education .solutionThree .col-md-7 img'))
    solution_scroll_animate($('#education .media .media-middle'),$('#education .media .media-middle img'))
    solution_scroll_animate($('#education .solutionOne .col-md-7'), $('#education .solutionOne .col-md-7 img'));
    solution_scroll_animate($('#education .solutionTwo .col-md-7'), $('#education .solutionTwo .col-md-7 img'));
    solution_scroll_animate($('#education .solutionThree .col-md-7'), $('#education .solutionThree .col-md-7 img'));
    $('div,a,img').removeClass('professionAni')
})
$('.customerBanner li').eq(4).on('click', function () {
    clickAni($('#elePro .media .media-middle img'),$('#elePro .solutionOne .col-md-7 img'),$('#elePro .solutionTwo .col-md-7 img'),$('#elePro .solutionThree .col-md-7 img'))
    solution_scroll_animate($('#elePro .media .media-middle'),$('#elePro .media .media-middle img'))
    solution_scroll_animate($('#elePro .solutionOne .col-md-7'), $('#elePro .solutionOne .col-md-7 img'));
    solution_scroll_animate($('#elePro .solutionTwo .col-md-7'), $('#elePro .solutionTwo .col-md-7 img'));
    solution_scroll_animate($('#elePro .solutionThree .col-md-7'), $('#elePro .solutionThree .col-md-7 img'));
    $('div,a,img').removeClass('professionAni')
})
$('.customerBanner li').eq(5).on('click', function () {
    clickAni($('#services .thumbnail img'),$('#services .solutionOne .col-md-7 img'),$('#services .solutionTwo .col-md-7 img'),$('#services .solutionThree .col-md-7 img'))
    solution_scroll_animate($('#services .thumbnail a'),$('#services .thumbnail a img'))
    solution_scroll_animate($('#services .solutionOne .col-md-7'), $('#services .solutionOne .col-md-7 img'));
    solution_scroll_animate($('#services .solutionTwo .col-md-7'), $('#services .solutionTwo .col-md-7 img'));
    solution_scroll_animate($('#services .solutionThree .col-md-7'), $('#services .solutionThree .col-md-7 img'));
    $('div,a,img').removeClass('professionAni')
})
//电商
//solution_scroll_animate($('#online .thumbnail a'),$('#online .thumbnail a img'));
solution_scroll_animate($('#online .solutionOne .col-md-7'),$('#online .solutionOne .col-md-7 img'));
solution_scroll_animate($('#online .solutionTwo .col-md-7'),$('#online .solutionTwo .col-md-7 img'));
solution_scroll_animate($('#online .solutionThree .col-md-7'),$('#online .solutionThree .col-md-7 img'));

/**点击切换导航时动画*/
function clickAni(sub,solution1,solution2,solution3){
    if ($(window).scrollTop() + $(window).height() >= sub.offset().top) {
        $.each(sub, function (i, item) {
            if (!$(item).hasClass('stopAni')) {
                $(item).addClass('stopAni')
                $(item).parent().addClass('stopAni')
                setTimeout(function () {
                    $(item).addClass('professionAni');
                }, i * 600);
            }else{
                $(item).css('opacity', '1');
            }
        });
        
        sub.on('oanimationend animationend webkitAnimationEnd', function () {
            $(this).css('opacity', '1');
            $(this).removeClass('professionAni');
        })
    }else{
        solution_scroll_animate($('#online .thumbnail a'),$('#online .thumbnail a img'));
    }
    loadSolution(solution1,solution2,solution3)
}
//当加载页面时判断解决方案是否执行动画
function loadSolution(solution1,solution2,solution3){
    if(solution1){
        if($(window).scrollTop() + $(window).height() > solution1.offset().top){
            if(!solution1.parent().hasClass('stopAni')){
                solution1.parent().addClass('stopAni')
                setTimeout(function () {
                    solution1.parent().addClass('professionAni');
                    solution1.css('opacity', '1');
                }, 1000);
            }
        }
    }
    if(solution2){
        if($(window).scrollTop() + $(window).height() > solution2.offset().top){
            if(!solution2.parent().hasClass('stopAni')){
                solution2.parent().addClass('stopAni')
                setTimeout(function () {
                    solution2.parent().addClass('professionAni');
                    solution2.css('opacity', '1');
                }, 1500);
            }
        }
    }
    if(solution3){
        if($(window).scrollTop() + $(window).height() > solution3.offset().top){
            if(!solution3.parent().hasClass('stopAni')){
                solution3.parent().addClass('stopAni')
                setTimeout(function () {
                    solution3.parent().addClass('professionAni');
                    solution3.css('opacity', '1');
                }, 2000);
            }
        }
    }
}
/**
 * 图片滚动上浮  
 */
function solution_scroll_animate(parent,sub) {
    var windowHeight = $(window).height();
    $(window).on('scroll', function () {
        var scrollHeight = $(this).scrollTop();
        var eleTop = parent.offset().top;
        if (windowHeight + scrollHeight > eleTop) {
            $.each(sub, function (i, item) {
                if(!$(item).parent().hasClass('stopAni')){
                    $(item).parent().addClass('stopAni')
                    $(item).addClass('stopAni')
                    setTimeout(function () {
                        $(item).addClass('professionAni');
                        $(item).css('opacity', '1');
                    }, i * 800);
                }
            });
            sub.on('oanimationend animationend webkitAnimationEnd', function () {
                $(this).css('opacity', '1');
                $(this).removeClass('professionAni');
            })
        }
    })
}