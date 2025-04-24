$("document").ready(function() {
    $('.seasons a').click(function(e) { //find all a tags inside class of seasons
        e.preventDefault(); //stop default submission
        var season = $(this).attr("href"); //contents of href attribute of this element
        //alert(season);

        season = season.toLowerCase();
        switch (season) {
            case "summer":
                $("html").css("background-color", "#EBA52B");
                $("#logo").attr("src", "images/summer.gif");
                $("#wear").attr("src", "images/summer-wear.jpg");
                $("h3#banner").text("Summer is finally here!");
                break;

            case "spring":
                $("html").css("background-color", "#2B7129");
                $("#logo").attr("src", "images/spring.gif");
                $("#wear").attr("src", "images/spring-wear.jpg");
                $("h3#banner").text("Spring is finally here!");
                break;

            case "winter":
                $("html").css("background-color", "#005393");
                $("#logo").attr("src", "images/winter.gif");
                $("#wear").attr("src", "images/winter-wear.jpg");
                $("h3#banner").text("Winter is finally here!");
                break;

            case "fall":
                $("html").css("background-color", "#A81124");
                $("#logo").attr("src", "images/fall.gif");
                $("#wear").attr("src", "images/fall-wear.jpg");
                $("h3#banner").text("Fall is finally here!");
                break;

            default:
                $("html").css("background-color", "#ccc");
                $("#logo").attr("src", "images/four-seasons.gif");
                $("#wear").attr("src", "images/300x400.png");
                $("h3#banner").text("Outfitter for All Seasons!");
        }
    });
});
