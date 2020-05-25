$(".tabmenu>li").on("click",function(){
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
})

$(".depth1 > li >a").on("mouseover focus",function(){
    $(this).next().stop().fadeIn(500)
    $(this).parent().siblings().children(".depthbox2").stop().fadeOut(100)
})

// $("#header .openMobgnb").on("click", function(){
//         $(this).parents("#header").toggleClass("on")
//         $(this).find("span").css({background:"rgba(1, 1, 1, 0.233)"})
// })