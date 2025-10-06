$(function(){

    //顶部导航 二级导航
    (function () {
        if($(".top-btnwrap").is(":hidden")){
            var ili = $(".top-nav-li");
            ili.mouseenter(function () {
                $(this).find(".top-subnav").stop().slideDown();
                $(this).find(".top-nav-link").addClass("hover");
            }).mouseleave(function () {
                $(this).find(".top-subnav").stop().slideUp();
                $(this).find(".top-nav-link").removeClass("hover");
            });
        }
    })();

    //banner轮播图
    var swiperImg = new Swiper(".swiper-img", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        speed: 1500,
        pagination:'.swiper-pagination-img',
        paginationClickable:true,
        effect:"fade"
    });

    //顶部导航
    $(".top-btn-collapse").click(function () {
        $(".top-right").slideToggle(300);
    });

    //展台搭建
    var swiperDesign = new Swiper(".swiper-design", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        autoplay:2400,
        autoplayDisableOnInteraction: false,
        speed: 800,
        prevButton: ".btn-design-prev",
        nextButton: ".btn-design-next",
        breakpoints: {
            767: {
                slidesPerView: 3
            },
            539: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    //首页 活动案例
    handleShow(".nav-case-item",".main-case","mouseenter");

    //首页 新闻中心
    var swiperNews = new Swiper(".swiper-news", {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true,
        autoplay:2500,
        autoplayDisableOnInteraction: false,
        speed: 800,
        prevButton: ".btn-news-prev",
        nextButton: ".btn-news-next",
        pagination:".swiper-pagination-news",
        paginationClickable:true
    });

    handleShow(".nav-news-item",".index-news-list","mouseenter");

    //侧栏列表
    (function(){
        var asideControl = $(".aside-list-link");
        var asideSub = $(".aside-sublist");
        asideControl.click(function(){
            var $this = $(this);
            var $thisSub = $this.siblings(".aside-sublist");

            asideControl.removeClass("act");
            $this.addClass("act");

            $thisSub.slideToggle();
            asideSub.not( $thisSub ).slideUp();
        });
    })();

    //小屏产品中心折叠按钮
    (function () {
        var $btnDrop = $(".s-drop-btn"),
            $dropList = $(".s-drop-list");
        if ($(".s-drop-wrap").find($dropList).length == 0) {
            //没有下拉列表
            $btnDrop.addClass("nodrop");
        } else {
            //有下拉列表
            $btnDrop.click(function () {
                $(this).toggleClass("act");
                $dropList.slideToggle(400);
            });
        }
    })();


    function handleShow(item,content,method){
        var $item = $(item);
        var $content = $(content);
        var contentLen = $content.length;
        $item.eq(0).addClass("act");
        $content.hide().eq(0).show();
        $item.each(function(i){
            var $this = $(this);
            $this.on(method,function(){
                if( i <= contentLen ){
                    $item.removeClass("act");
                    $this.addClass("act");
                    $content.hide().eq(i).show();
                }
            });
        });
    }
  
});
