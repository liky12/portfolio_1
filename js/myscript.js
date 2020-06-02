$(".depth1 > li >a").on("click" ,function(){
    $(this).next().stop().slideDown(500)
    $(this).parent().siblings().children(".depthbox2").stop().fadeOut(0)
})


$("header").on("mouseleave" , function(){
    $(this).find(".depthbox2").stop().slideUp(400)
})

// $("#header .openMobgnb").on("click", function(){
//         $(this).parents("#header").toggleClass("on")
// })


// $(".tab_menu > a").eq(0).on("click",function(){
//     $(this).css("color","black").css("border-bottom","1px solid #000")
//     $(this).siblings().css("color","white").css("border-bottom","none")
//     $(this).parent().siblings().removeClass("on")
//     $(this).parent().siblings(".tab_mov").addClass("on")
// })
// $(".tab_menu > a").eq(1).on("click",function(){
//     $(this).css("color","black").css("border-bottom","1px solid #000")
//     $(this).siblings().css("color","white").css("border-bottom","none")
//     $(this).parent().siblings().removeClass("on")
//     $(this).parent().siblings(".tab_product").addClass("on")
// })
// $(".tab_menu >a").eq(2).on("click",function(){
//     $(this).css("color","red").css("border-bottom","1px solid red")
//     $(this).siblings().css("color","white").css("border-bottom","none")
//     $(this).parent().siblings().removeClass("on")
//     $(this).parent().siblings(".tab_product2").addClass("on")
// })



$(".sdgimg").slick({
    autoplay:true,//기본값 false
    autoplaySpeed:2000,//기본값3000 슬라이드 시간
    dots:true,//기본값 false 슬라이드 번호 버튼
    speed:400, //슬라이드 이동 시간
    slideToShow:1,//첫화면에 보여지는 슬라이드 수
    slideToScroll:1,//넘어가는 슬라이드 수
    pauseOnHover:false,//  슬라이드 멈춤 여부
    pauseOnDotsHover:true,//슬라이드 버튼 위에 마우스오버시 멈춤
    pauseOnFocus:false,//동그라미 버븐클릭시 자동실행 멈춤여부
    cssEase:"linear",//슬라이드 가속도
    draggable:true,//마우스 드래그시 움직임 여부
    fade:false,//넘어가는 방향(오->왼), true:제자리아웃온 효과
    arrows:true,//기본값true,슬라이드 방향 버튼
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})