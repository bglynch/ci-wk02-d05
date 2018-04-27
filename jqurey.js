$(document).ready(function() {
    
    $("#myParagraph").click(function(){
        for (let i=1; i<=10; i++){
            $("#myParagraph").append("<p>This is paragraph number "+i+"</p>");
        }
        $("myParagraph").addClass("className")
    });
    $("#bearButton").click(function(){
        $("#duckBear").css("background-image", 'url("bear.jpeg")');
    });
    $("#duckButton").click(function(){
        $("#duckBear").css("background-image", 'url("duck.jpeg")');
    });
}); 