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


$(".tab_menu > a").eq(0).on("click",function(){
    $(this).css("color","black").css("border-bottom","1px solid #000")
    $(this).siblings().css("color","white").css("border-bottom","none")
    $(this).parent().siblings().removeClass("on")
    $(this).parent().siblings(".tab_mov").addClass("on")
})
$(".tab_menu > a").eq(1).on("click",function(){
    $(this).css("color","black").css("border-bottom","1px solid #000")
    $(this).siblings().css("color","white").css("border-bottom","none")
    $(this).parent().siblings().removeClass("on")
    $(this).parent().siblings(".tab_product").addClass("on")
})
$(".tab_menu >a").eq(2).on("click",function(){
    $(this).css("color","red").css("border-bottom","1px solid red")
    $(this).siblings().css("color","white").css("border-bottom","none")
    $(this).parent().siblings().removeClass("on")
    $(this).parent().siblings(".tab_product2").addClass("on")
})



