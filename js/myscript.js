$(".tabmenu>li").on("click",function(){
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
})