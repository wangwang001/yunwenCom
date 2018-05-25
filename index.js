
quick_action_animate();
SaaS_scroll_animate();
technology_scroll_animate();
banner_click();
industry_click();
evaluate();
var timeout = null;
var interval = null;
var index = 0;
var stroke = $('.stroke');
var strokeArray = Array.prototype.slice.call(stroke);
var wow = new WOW({boxClass: 'wow'});
wow.init();

// 定时滚动
interval = setInterval(function(){
    autoChange();
},5000)
// 自动滚动
function autoChange() {
    index++;
    if (index > $('.stroke').length - 1) {
        index = 0;
    }
    $('.stroke').css('stroke-dashoffset', '282.783');
    $('.tab').removeClass('center animating-enter-up');

    $(strokeArray[index]).css('stroke-dashoffset', '0');
    $('#tab'+index).addClass('center animating-enter-up');
}

//点击滚动
function banner_click(){
    $('.banner-tab-li').unbind('click').bind('click', function () {
        clearInterval(interval);
        interval = null;
    
        $('.stroke').css('stroke-dashoffset', '282.783');
        $(this).children().children().eq(1).css('stroke-dashoffset', '0');
    
        var tabeId = $(this).attr('locaid');
        $('.tab').removeClass('center animating-enter-up');
        $('#' + tabeId).addClass('center animating-enter-up');
    });
}

//体验部分动画
function quick_action_animate(){
    $.each($('.quick-action-item'), function(i, item){
        setTimeout(function(){
            $(item).addClass('professionAni');
        },i*800);
    });
    $('.quick-action-item').on('oanimationend animationend webkitAnimationEnd', function(){
        $(this).css('opacity','1');
    })
}

//SaaS服务部分页面滚动到相应位置时执行动画
function SaaS_scroll_animate(){
    var windowHeight = $(window).height();
    $(window).on('scroll', function(){
        var scrollHeight = $(this).scrollTop();
        var eleTop = $('.SaaS-content-item .item-desc').offset().top;
        if(windowHeight + scrollHeight > eleTop){
            $.each($('.SaaS-content-item .item-desc li'), function(i, item){
                setTimeout(function(){
                    $(item).attr('style','opacity:1');
                },i*500);
            });
        }
    })
}

//核心技术部分鼠标滑过添加动画
function technology_scroll_animate(){
    $('.advantage>ul>li img').unbind('mouseenter').bind('mouseenter', function(){
        $(this).addClass('productAni');
    });
    $('.advantage>ul>li img').on('oanimationend animationend webkitAnimationEnd', function(){
        $(this).removeClass('productAni');
    })
}

//行业点击事件
function industry_click(){
    var index = 1;
    var amount = $('.industry-tab>span').length;
    //行业页签点击事件
    $('.industry-tab>span').unbind('click').bind('click', function(e){
        var src = e.target || event.srcElement;
        var dataIndex = $(src).attr('class');
        if($(src).hasClass('active')){
            return;
        }else{
            $(src).addClass('active').siblings('span').removeClass('active');
            $('.industry-content-item[data-index="'+dataIndex+'"]').addClass('active').siblings('.industry-content-item').removeClass('active');
            index = dataIndex.substr(dataIndex.length-1,1);
        }
        
    });
    //左右按钮点击事件
    $('.industry-content>.indusrty-left-btn').unbind('click').bind('click', function(){
        if(index === 1){
            return;
        }else if(index > 1){
            index--;
            $('.industry-tab>span.iyunwen-index-'+index).trigger('click');
        }
    });
    $('.industry-content>.indusrty-right-btn').unbind('click').bind('click', function(){
        if(index === amount){
            return;
        }else if(index < amount){
            index++;
            $('.industry-tab>span.iyunwen-index-'+index).trigger('click');
        }
    });
}
/**用户评价切换图片*/
function evaluate(){
    $('.evaluate-content .evaluate').on('click',function(e){
        if($(this).css('opacity') == '0.5'){
            var index = $(this).index();
            if(e.clientX > 1000){//向左
                if(index == 0){
                    $(this).next().next().css({
                        'left':'0',
                        'transform':'rotateY(20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).next().css({
                        'left':'38%',
                        'transform':'rotateY(-20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(-20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).css({
                        'left':'18%',
                        'transform':'scale(1) translateZ(10px)',
                        '-webkit-transform':'scale(1) translateZ(10px)',
                        '-moz-transform':'scale(1) translateZ(10px)',
                        '-o-transform':'scale(1) translateZ(10px)',
                        'opacity':'1',
                        'z-index':'5',
                        'cursor':'default'
                    });
                }
                if(index == 1){
                    $(this).prev().css({
                        'left':'0',
                        'transform':'rotateY(20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).next().css({
                        'left':'38%',
                        'transform':'rotateY(-20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(-20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).css({
                        'left':'18%',
                        'transform':'scale(1) translateZ(10px)',
                        '-webkit-transform':'scale(1) translateZ(10px)',
                        '-moz-transform':'scale(1) translateZ(10px)',
                        '-o-transform':'scale(1) translateZ(10px)',
                        'opacity':'1',
                        'z-index':'5',
                        'cursor':'default'
                    });
                }
                if(index == 2){
                    $(this).prev().prev().css({
                        'left':'38%',
                        'transform':'rotateY(-20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(-20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).prev().css({
                        'left':'0',
                        'transform':'rotateY(20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).css({
                        'left':'18%',
                        'transform':'scale(1) translateZ(10px)',
                        '-webkit-transform':'scale(1) translateZ(10px)',
                        '-moz-transform':'scale(1) translateZ(10px)',
                        '-o-transform':'scale(1) translateZ(10px)',
                        'opacity':'1',
                        'z-index':'5',
                        'cursor':'default'
                    });
                }
            }else{
                if(index == 0){
                    $(this).next().next().css({
                        'left':'0',
                        'transform':'rotateY(20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).next().css({
                        'left':'38%',
                        'transform':'rotateY(-20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(-20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).css({
                        'left':'18%',
                        'transform':'scale(1) translateZ(10px)',
                        '-webkit-transform':'scale(1) translateZ(10px)',
                        '-moz-transform':'scale(1) translateZ(10px)',
                        '-o-transform':'scale(1) translateZ(10px)',
                        'opacity':'1',
                        'z-index':'5',
                        'cursor':'default'
                    });
                }
                if(index == 1){
                    $(this).prev().css({
                        'left':'0',
                        'transform':'rotateY(20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).next().css({
                        'left':'38%',
                        'transform':'rotateY(-20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(-20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).css({
                        'left':'18%',
                        'transform':'scale(1) translateZ(10px)',
                        '-webkit-transform':'scale(1) translateZ(10px)',
                        '-moz-transform':'scale(1) translateZ(10px)',
                        '-o-transform':'scale(1) translateZ(10px)',
                        'opacity':'1',
                        'z-index':'5',
                        'cursor':'default'
                    });
                }
                if(index == 2){
                    $(this).prev().prev().css({
                        'left':'38%',
                        'transform':'rotateY(-20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(-20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(-20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).prev().css({
                        'left':'0',
                        'transform':'rotateY(20deg) translateZ(-100px)',
                        '-webkit-transform':'rotateY(20deg) translateZ(-100px)',
                        '-moz-transform':'rotateY(20deg) translateZ(-100px)',
                        '-o-transform':'rotateY(20deg) translateZ(-100px)',
                        'opacity':'0.5',
                        'z-index':'1',
                        'cursor':'pointer'
                    });
                    $(this).css({
                        'left':'18%',
                        'transform':'scale(1) translateZ(10px)',
                        '-webkit-transform':'scale(1) translateZ(10px)',
                        '-moz-transform':'scale(1) translateZ(10px)',
                        '-o-transform':'scale(1) translateZ(10px)',
                        'opacity':'1',
                        'z-index':'5',
                        'cursor':'default'
                    });
                }
            }
        }
    })
}