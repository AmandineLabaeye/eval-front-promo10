let Image = [
    "Image/Mec.jpg",
    "Image/Mec1.jpg",
    "Image/Mec2.jpg",
    "Image/Mec3.jpg",
    "Image/Mec4.jpg",
    "Image/Mec5.jpg",
    "Image/Femme1.jpg",
    "Image/Femme2.jpg",
    "Image/Femme3.jpg",
];

document.getElementById("Carousel").style.backgroundImage =  "url("+Image[0]+")";

let i = 0;

document.getElementById("Next").addEventListener("click", function () {

    i++;

    if (i === Image.length) {

        i = 0;

    }

    document.getElementById("Carousel").style.backgroundImage =  "url("+Image[i]+")";

});

document.getElementById("Previous").addEventListener("click", function () {

    if (i === 0) {

        i = Image.length;

    }

    if (i > 0) {

        i--;

    }

    document.getElementById("Carousel").style.backgroundImage =  "url("+Image[i]+")";

});
/*
$(".Profile, .Experience, .Education, .Blog, " +
    ".SocialMenu, .Contact," +
    " .Portfolio").hide();
*/

$("#GrosBloc, #GrosBloc1").hover(function () {

    $("#GrosBloc, #GrosBloc1").css({

        backgroundColor: "#248624",
        border: "#248624 solid"

    });

});

$("#Blog, button").hover(function () {

    $(this).css({

        backgroundColor: "#248624",
        border: "#248624 solid"

    });

});

$("#Blog").click(function () {

    $(".Div").fadeOut(function () {

        $(".Blog").slideDown();

    });

});

$("#Profile").hover(function () {

    $(this).css({

        backgroundColor: "#BA7000",
        border: "#BA7000 solid"

    });

}).click(function () {

    $(".Div").fadeOut(function () {

        $(".Profile").slideDown();

    });

});

$(".Profile, .Experience," +
    " .Education, .Blog, .SocialMenu," +
    " .Contact, .Portfolio").click(function () {

    $(this).slideUp(function () {

        $(".Div").fadeIn();

    });

});

$("#Experience").click(function () {

    $(".Div").fadeOut(function () {

        $(".Experience").slideDown();

    });

});

$("#Contact").click(function () {

    $(".Div").fadeOut(function () {

        $(".Contact").slideDown();

    });

});

$("#Experience, #Contact").hover(function () {

    $(this).css({

        backgroundColor: "#1A5D80",
        border: "#1A5D80 solid"

    });

});

$("#Education").hover(function () {

    $(this).css({

        backgroundColor: "#A44133",
        border: "#A44133 solid"

    });

}).click(function () {

    $(".Div").fadeOut(function () {

        $(".Education").slideDown();

    });

});

$("#SocialMenu, #Portfolio").hover(function () {

    $(this).css({

        backgroundColor: "#B45521",
        border: "#B45521 solid"

    });

});

$("#SocialMenu").click(function () {

    $(".Div").fadeOut(function () {

        $(".SocialMenu").slideDown();

    });

});

$("#Portfolio").click(function () {

    $(".Div").fadeOut(function () {

        $(".Portfolio").slideDown();

    });


});
