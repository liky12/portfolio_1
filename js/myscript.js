
var winWidth;
function init(){
            winWidth = $(window).width()
            if( winWidth > 1023){
            $("#header").removeClass("on"); }
}


$(".depth1 > li >a").on("click" ,function(){
    if($(this).parents("#header").hasClass("on")){
        $(this).next().fadeOut(0)
    } else{  
        $(this).next().stop().slideDown(500)
        $(this).parent().siblings().children(".depthbox2").stop().fadeOut(0)
    }
})

$("header").on("mouseleave" , function(){
    $(this).find(".depthbox2").stop().slideUp(400)
})

// $("#header .openMobgnb").on("click", function(){
//         $(this).parents("#header").toggleClass("on")
// })

$("#header .openMOgnb").on("click", function(){
    // $(this).parents("#header").addClass("on")
    // toggleClass("on") 하면 열었다 닫았다 할 수 있다.
    if(!$(this).parents("#header").hasClass("on")){
        $(this).parents("#header").addClass("on")
    }
})
$("#header .closeMOgnb").on("click", function(){
    $(this).parents("#header").removeClass("on")
})






$(".sdgimg").slick({
    autoplay:true,//기본값 false
    autoplaySpeed:5000,//기본값3000 슬라이드 시간
    dots:true,//기본값 false 슬라이드 번호 버튼
    speed:300, //슬라이드 이동 시간
    slidesToShow:1,//첫화면에 보여지는 슬라이드 수
    slidesToScroll:1,//넘어가는 슬라이드 수
    pauseOnHover:false,//  슬라이드 멈춤 여부
    pauseOnDotsHover:false,//슬라이드 버튼 위에 마우스오버시 멈춤
    pauseOnFocus:false,//동그라미 버븐클릭시 자동실행 멈춤여부
    cssEase:"linear",//슬라이드 가속도
    draggable:true,//마우스 드래그시 움직임 여부
    fade:true,//넘어가는 방향(오->왼), true:제자리아웃온 효과
    arrows:true,//기본값true,슬라이드 방향 버튼
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-chevron-right"></i></button>',
})


$(".tab_slide").slick({
    dots:true,//기본값 false 슬라이드 번호 버튼
    speed:200, //슬라이드 이동 시간
    slidesToShow:1,//첫화면에 보여지는 슬라이드 수
    slidesToScroll:1,//넘어가는 슬라이드 수
    pauseOnHover:true,//  슬라이드 멈춤 여부
    pauseOnDotsHover:true,//슬라이드 버튼 위에 마우스오버시 멈춤
    pauseOnFocus:false,//동그라미 버븐클릭시 자동실행 멈춤여부
    cssEase:"linear",//슬라이드 가속도
    draggable:false,//마우스 드래그시 움직임 여부
    fade:false,//넘어가는 방향(오->왼), true:제자리아웃온 효과
    arrows:false,//기본값true,슬라이드 방향 버튼
    })



$(".tab_slide .slick-dots li button").eq(0).text("TheJoeunKorea")
$(".tab_slide .slick-dots li button").eq(1).text("product1")
$(".tab_slide .slick-dots li button").eq(2).text("product2")


$(".topbt").on("click",function(){
    $("body,html").animate({scrollTop:"0px"},650);
})


$(".plpa").on("click",function(){
    if($(this).find("i").hasClass("fa-pause")){
        $(".sdgimg").slick("slickPause")
        $(this).find("i").removeClass("fa-pause").addClass("fa-play")
    }else{ 
        $(".sdgimg").slick("slickPlay")
        $(this).find("i").removeClass("fa-play").addClass("fa-pause")
    }
})



$(".hot_item").slick({
    autoplay:true,//기본값 false
    autoplaySpeed:2000,//기본값3000 슬라이드 시간
    dots:true,//기본값 false 슬라이드 번호 버튼
    speed:400, //슬라이드 이동 시간
    centerMode:true,
    centerPadding:"200px",
    slidesToShow: 3,//첫화면에 보여지는 슬라이드 수
    slidesToScroll: 1,//넘어가는 슬라이드 수
    pauseOnHover:true,//  슬라이드 멈춤 여부
    pauseOnDotsHover:true,//슬라이드 버튼 위에 마우스오버시 멈춤
    pauseOnFocus:false,//동그라미 버븐클릭시 자동실행 멈춤여부
    cssEase:"linear",//슬라이드 가속도
    draggable:true,//마우스 드래그시 움직임 여부
    fade:false,//넘어가는 방향(오->왼), true:제자리아웃온 효과
    arrows:true,//기본값true,슬라이드 방향 버튼
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
        breakpoint:800,
        settings:{
            centerMode:true,
            centerPadding:"100px",
            slidesToShow: 1,//첫화면에 보여지는 슬라이드 수
        }
    }]
  });

