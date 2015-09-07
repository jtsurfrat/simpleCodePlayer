$(function() {
    console.log( "ready!" );

    var windowHeight = $(window).height();
    var menuBarHeight = $("#menuBar").height();

    var codeContainer = windowHeight - menuBarHeight;

    $(".codeContainer").height(codeContainer + "px")

    $(".toggle").click(function(){
        $(this).toggleClass("selected");

        var activeDiv = $(this).html();
        // alert(activeDiv);
        // $("#HTMLContainer").toggle(); testing
        $("#"+activeDiv+"Container").toggle();

        var showingDivs = $(".codeContainer").filter(function(){
            return($(this).css("display")!= "none");
            //will return if display in not equal to none
        }).length;

        // alert(showingDivs);
        var width= 100/showingDivs;
        $(".codeContainer").css("width", width+"%");
    });

    $("#runButton").click(function(){
        // $("iframe").contents().find("html").html('test');
        $("iframe").contents().find("html").html("<style>" +
            $("#cssCode").val()+ "</style>"+ $("#htmlCode").val());
        //displays expample code

            //for javascript only
            document.getElementById("resultFrame").contentWindow.
            eval($("#jsCode").val());
            // dangerous code to run for security

    });

});
