//gnb menu action
$(function(){
    $("nav").mouseenter(function(){
        $("ul.lnb").fadeIn();
    });
    $("nav").mouseleave(function(){
        $("ul.lnb").fadeOut();
    });
});

//slide
$(function(){
    setInterval(mySlide,3000);
    function mySlide(){
        $(".slidein").animate({"top":"-300px"},500,function(){
            $(".slidein img:first-child").appendTo(".slidein");
            $(".slidein").css("top","0");
        });        
    }
});

//tab
$(function(){
    $("ul.tab a").click(function(event){
        event.preventDefault();
        $("ul.tab a").removeClass("active");
        $(this).addClass("active");
        var str=$(this).attr("href");
        $("#box1,#box2").removeClass("active");
        $(".content .wrap1 "+str).addClass("active");
    });
});

//popup
$(function(){
    $("ul.notice a:first-child").click(function(event){
        event.preventDefault();
        $(".popup").css("display","block");
    });
    $(".popup .btn-close").click(function(){
        $(".popup").css("display","none");
    });
});