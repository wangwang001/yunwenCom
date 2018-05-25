/**
 * 帮助文档详细右侧点击收缩展开
 */
Catalog_click();
scrollWin();
breadcrumb();
//帮助文档目录点击事件
function Catalog_click(){
    $('.oUl .oneLi p').hover(function(){
        if($(this).hasClass('checked')){
            $(this).find('span').removeClass('arrowRight');
        }else{
            $(this).find('span').addClass('arrowRight');
        }
        if($(this).find('span').hasClass('arrowBottom')){
            $(this).find('span').removeClass('arrowRight arrowBottom');
            $(this).find('span').addClass('active');
        }
        $(this).addClass('checkedHover');
        $(this).find('a.oneA').css({
            'color':'#fff'
        })
    },function(){
        $(this).find('span').removeClass('arrowRight');
        $(this).removeClass('checkedHover')
        if($(this).hasClass('checked')){
            $(this).find('a.oneA').css({
                'color':'#fff'
            })
        }else{
            $(this).find('a.oneA').css({
                'color':'#333'
            })
            $(this).find('span').removeClass('active');
            if($(this).parent().find('.twoLi').hasClass('checked')){
                $(this).find('span').addClass('arrowBottom');
            }
        }
        if($(this).find('span').hasClass('active')){
            $(this).find('span').removeClass('arrowBottom');
        }
    })
    $('.oUl .twoUl .twoLi').hover(function(){
        $(this).addClass('checkedHover');
    },function(){
        $(this).removeClass('checkedHover');
    })
    $('.oUl .oneLi p').unbind('click').bind('click',function(){
        $('.breadcrumb li.active').text($(this).attr('rel'));
        $('.oUl .oneLi span').removeClass('active arrowBottom arrowRight');
        $('.oUl .oneLi .checked').removeClass('checked');
        $('.oUl .oneLi a.oneA').css('color','#333');
        $('.oUl .oneLi .twoUl li a').css('color','#666');
        $('.oUl .hasUl .twoUl').css('display','none');  
        if($(this).parents('li.oneLi').hasClass('hasUl')){
            if($(this).parents('li.oneLi').find('.twoUl').css('display') == 'none'){
                $(this).find('span').addClass('active');
                $(this).addClass('checked');
                $(this).find('a.oneA').css({
                    'color':'#fff'
                })
                $('.oUl .hasUl .twoUl').css('display','none');
                $(this).parents('li.oneLi').find('.twoUl').css('display','block');
            }else{
                $(this).removeClass('checked')
                $(this).find('a.oneA').css({
                    'color':'#333'
                })
                $('.oUl .hasUl .twoUl').css('display','none');
                $(this).parents('li.hasUl').find('.twoUl').css('display','none');
            }
        }else{
            $(this).addClass('checked');
            $(this).find('a').css('color','#fff');
        }
    })
    
    $('.oUl .twoUl a').unbind('click').bind('click',function(){
        $('.oUl .oneLi span').removeClass('active arrowBottom arrowRight');
        $('.oUl .oneLi .checked').removeClass('checked');
        $('.oUl .oneLi a.oneA').css('color','#333');
        $('.oUl .oneLi .twoUl li a').css('color','#666');
        $(this).parents('.hasUl').find('p span').addClass('arrowBottom');
        $(this).css('color','#fff');
        $(this).parent().addClass('checked');
    })
}
function scrollWin(){
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 158){
            $('.doc-content-list').css({
                'position':'fixed',
                'top':'100px',
                'width':'292px'
            })
        }else{
            $('.doc-content-list').css({
                'position':'inherit',
                'top':'0'
            })
        }
    })
}

/**获取页面的路径*/
function UrlSearch(){
    var name,value; 
    var str=location.href; //取得整个地址栏
    var num=str.indexOf("?")
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){ 
    num=arr[i].indexOf("="); 
         if(num>0){ 
              name=arr[i].substring(0,num);
              value=arr[i].substr(num+1);
              this[name]=value;
         } 
     } 
 } 
 
/**面包屑展示*/
function breadcrumb(){
    var Request=new UrlSearch(); //实例化
    var Id = Request.id;
    for(var i = 0;i < $('.doc-content-list .oneA').length;i++){
        if(Id == $('.doc-content-list .oneA').eq(i).attr('href')){
            $('.doc-content-list .oneA').eq(i).trigger('click');
            $('.breadcrumb>.active').html($('.doc-content-list .oneA').eq(i).parent().attr('rel'));
        }
    }
}