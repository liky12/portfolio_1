$(".tabmenu>li").on("click",function(){
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
})

$(".depth1 > li >a").on("mouseover focus",function(){
    $(this).next().stop().slideDown(500)
    $(this).parent().siblings().children(".depthbox2").stop().fadeOut(200)
})

$("#header .openMobgnb").on("click", function(){
        $(this).parents("#header").toggleClass("on")
})