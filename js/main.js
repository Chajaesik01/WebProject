var pos = 0;
var totalSlides = 5;
var sliderWidth = 160;

$(document).ready(function () {
    // toggleMenu 다 숨기기
    $("#info .toggleMenu").hide();
    // 게시판 제어 토글
    $("#info .toggle").on("click", function () {
        $(this).next().slideToggle("fast");
    });
    // 사용자 생성 게시판 제어 토글
    $(".toggleSwitch").on("click", function () {
        this.classList.toggle('active');
        $(this).parent().next().slideToggle("fast");
    });
    // 게시판 제어 토글의 input text 엔터로만 submit하기
    $("#info input").attr('onkeydown', function (event) {
        let key = event.key || event.keyCode;
        if ((key === 'Enter' && !event.shiftKey) || (key === 13 && key !== 16)) {
            boardNameForSearch.submit();
            return false;
        }
    });

    //MVP Slider
    var autoSlider = setInterval(slideRight, 3000);
    $.each($('#mvp ul li'), function () {
        var li = document.createElement('li');
        $('#pagination-wrap ul').append(li);
    });
    pagination();
    $('#mvp').hover(
        function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
        function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
    );
});


function slideRight() {
    pos++;
    if (pos == totalSlides) { pos = 0; }
    $('#mvp ul#slider').css('left', -(sliderWidth * pos));
    pagination();
}

function pagination() {
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}