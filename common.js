// $(document).ready(function(){
    BrowserType();
    //判断当前浏览类型,是否是ie8以下 
    function BrowserType(){  
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串   
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        if (isIE){  
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
            reIE.test(userAgent);  
            var fIEVersion = parseFloat(RegExp["$1"]);  
            if(fIEVersion <= 9){
                window.location.href='http://www.iyunwen.com:81';
            }else{
                /**
                 * 右侧固定栏目
                */
                $('.fixedBoxList .fixeBoxLi').hover(function(){
                    $(this).find('.chatBoxAfter').removeClass('hide');
                    $(this).css('background','rgba(47, 150, 244, 1)');
                },function(){
                    $(this).find('.chatBoxAfter').addClass('hide');
                    $(this).css('background','rgba(47, 150, 244, 0.7)');
                })
                /**返回顶部**/
                $('.BackToTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});

                /***移动端导航栏***/
                $('.toogle-button-holder .m-more .dg-button-img').on('click',function(){
                    $(this).css('display','none');
                    $('.m-close .dg-button-img').css('display','block');
                    $('.iyunwen-nav-list').css({
                        'opacity':1,
                        'display':'block'
                    },200)
                    $('.iyunwen-header').css('background','#2f49f6')
                })
                $('.toogle-button-holder .m-close .dg-button-img').on('click',function(){
                    $(this).css('display','none');
                    $('.m-more .dg-button-img').css('display','block');
                    $('.iyunwen-header').css('background','none');
                    $('.iyunwen-nav-list').css({
                        'opacity':0,
                        'display':'none'
                    },200)
                })
                if($(window).width() < 770){
                    $('.has-child').on('click',function(){
                        if($(this).hasClass('show-list')){
                            $(this).removeClass('show-list');
                            $(this).find('.child-list-container').animate({
                                'display':'none'
                            })
                        }else{
                            $(this).addClass('show-list');
                            $(this).find('.child-list-container').css({
                                'display':'block'
                            })
                        }
                    })
                }else{
                    /**导航鼠标滑过显示子导航*/
                    $('.has-child').hover(function(){
                        $(this).find('.child-list-container').show();
                        $(this).find('.child-list-container').css({
                            'top':"60px",
                        },200);
                    },function(){
                        $(this).find('.child-list-container').hide();
                        $(this).find('.child-list-container').css({
                            'top':"40px",
                        },200);
                    })
                }
            }
        }else{
            /**
             * 右侧固定栏目
            */
            $('.fixedBoxList .fixeBoxLi').hover(function(){
                $(this).find('.chatBoxAfter').removeClass('hide');
                $(this).css('background','rgba(47, 150, 244, 1)');
            },function(){
                $(this).find('.chatBoxAfter').addClass('hide');
                $(this).css('background','rgba(47, 150, 244, 0.7)');
            })
            /**返回顶部**/
            $('.BackToTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});

            /***移动端导航栏***/
            $('.toogle-button-holder .m-more .dg-button-img').on('click',function(){
                $(this).css('display','none');
                $('.m-close .dg-button-img').css('display','block');
                $('.iyunwen-nav-list').css({
                    'opacity':1,
                    'display':'block'
                },200)
                $('.iyunwen-header').css('background','#2f49f6')
            })
            $('.toogle-button-holder .m-close .dg-button-img').on('click',function(){
                $(this).css('display','none');
                $('.m-more .dg-button-img').css('display','block');
                $('.iyunwen-header').css('background','none');
                $('.iyunwen-nav-list').css({
                    'opacity':0,
                    'display':'none'
                },200)
            })
            if($(window).width() < 770){
                $('.has-child').on('click',function(){
                    if($(this).hasClass('show-list')){
                        $(this).removeClass('show-list');
                        $(this).find('.child-list-container').css({
                            'display':'none'
                        })
                    }else{
                        $(this).addClass('show-list');
                        $(this).find('.child-list-container').css({
                            'display':'block'
                        })
                    }
                })
            }else{
                /**导航鼠标滑过显示子导航*/
                $('.has-child').hover(function(){
                    $(this).find('.child-list-container').show();
                    $(this).find('.child-list-container').animate({
                        'top':"60px",
                    },200);
                },function(){
                    $(this).find('.child-list-container').hide();
                    $(this).find('.child-list-container').css({
                        'top':"40px",
                    },200);
                })
            }

        }  
    }
// })