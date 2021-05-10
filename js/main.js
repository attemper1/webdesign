//nav menu action
$(function(){
    $("nav").mouseenter(function(){
        $("ul.lnb").stop().fadeIn();
    });
    $("nav").mouseleave(function(){
        $("ul.lnb").stop().fadeOut();
    });
});


//slide
$(function(){
    setInterval(mySlide,3000);
    function mySlide(){
        $(".slidein").animate({"left":"-1200px"},500,function(){
            $(".slidein img:first-child").appendTo(".slidein");
            // $(".slidein img:first-child").remove();
            $(".slidein").css("left","0");
        });
    }

    // function mySlide(){
    //     $(".slidein img:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slidein");
    // }
});

//tab action
$(function(){
    $("ul.tab a").click(function(event){
        event.preventDefault();
        var str=$(this).attr("href");
        $("ul.tab a").removeClass("active");
        $(this).addClass("active");
        $("#box1,#box2").removeClass("active");
        $(".content .wrap1 "+str).addClass("active");
    });
})

//popup
$(function(){
    $("ul.notice li:first-child a").click(function(event){
        event.preventDefault();
        $(".popup").css("display","block");
    });
    $(".popup .btn-close").click(function(){
        $(".popup").css("display","none");
    });
});