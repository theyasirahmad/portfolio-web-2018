
// $(document).ready(function () {
//     $(window).resize(function () {
//         // var banner = document.getElementById('banner');
//         // console.log(-649+banner.clientHeight+295);


//         // var aboutdiv = document.getElementById('aboutdiv')
//         // aboutdiv.style.marginTop = `${banner.clientHeight}px`;
//     });

// });


// var banner = document.getElementById('banner');
// console.log(banner.clientHeight);


// // 649 -649 + 295= margin top 

//  variablues used+++++++++++++++++++++++++++++++++++++++++++++++++

var counter = 0;

// 
$("#aboutbtn").click(function () {
    console.log("asg");
    $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 1500);
});


var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");
var slider4 = document.getElementById("slider4");
var slider5 = document.getElementById("slider5");

function statsLoader() {



    var timer = setInterval(function () {

        if (slider1.value <= 88) {
            slider1.value++;
        }
        else {
            clearInterval(timer);
        }
        if (slider2.value <= 80)
            slider2.value++;

        if (slider3.value <= 75)
            slider3.value++;

        if (slider4.value <= 70)
            slider4.value++;

        if (slider5.value <= 80)
            slider5.value++;


    }, 17);

}

function statsInitial() {
    slider1.value = 0;
    slider2.value = 0;
    slider3.value = 0;
    slider4.value = 0;
    slider5.value = 0;

}
$(document).scroll(function () {

    var y = $(this).scrollTop();
    if (y > 500 && counter == 0) {
        statsLoader();
        counter = 1;
    } else if (y < 500) {
        statsInitial();
        counter = 0;
    }
});

