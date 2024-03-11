$(document).ready(function(){
    $(".texte").hover(function(){
        var targetDiv = "#" + $(this).data("target");
        $(targetDiv).css("opacity", "1");
    }, function(){
        var targetDiv = "#" + $(this).data("target");
        $(targetDiv).css("opacity", "0");
    });
});
