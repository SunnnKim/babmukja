//모달 적용부분


$(".header_meetup_create").click(function () {
    alert("modal 켜진다");
    $("#write_modal").modal("show");
    $("#write_modal").modal({
        backdrop: 'static'
    });
});

//클릭시 주소 이동부분
$(".info_block").click(function(){
	location.href="http://localhost/babmukja/meetup/detail.do";
});

//검색창 none->block 변경 부분
$(".header_search").click(function () {

    $(".after_click").css("display", "block");
});
$(".location_title_container").click(function () {
    alert($(".location_position").css("display"));
    // if (

    //     $(".location_position").css("display") == "none"
    // ) {
    $(".location_position").css("display", "block");
    // } else if (
    //     $(".location_position").css("display") == "block"
    // ) {
    //     $(".location_position").css("display", "none");
    // }

});
$(".food_type_title").click(function () {
    $(".food_type_position").css("display", "block");
});
$(".monthly_fee_title").click(function () {
    $(".monthly_fee_position").css("display", "block");
});


//tab 누를떄 변경부분
for (let i = 0; i <= 5; i++) {
    let number = i;

    $("td:eq(" + number + ")").click(function () {

        $(`td`).css("background-color", "white");
        $(`td`).css("color", "black");
        $(".tabPanel").css("display", "none");
        $("td:eq(" + number + ")").css("background-color", "#7db341");
        $("td:eq(" + number + ")").css("color", "white");
        $(".tabPanel:eq(" + number + ")").css("display", "block");
        clearInterval(interval);
    });
    //이거 쓰기mouseup
}//for

var num = 0;

setInterval(function () {


    $("td:eq(" + num + ")").click();
    console.log(num);
    num++;
    if (num == 6) {
        num = 0;
    }
}, 1400);

var interval = setInterval(function () {


    $("td:eq(" + num + ")").click();
    console.log(num);
    num++;
    if (num == 6) {
        num = 0;
    }
}, 1200);



//bootstrap
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});