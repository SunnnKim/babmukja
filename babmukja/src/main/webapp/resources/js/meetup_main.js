//모달 적용부분


$(".header_meetup_create").click(function () {
    $("#write_modal").modal("show");
    $("#write_modal").modal({
        backdrop: 'static'
    });
});




//모달에서 회비 선택부분
$(".modal_fee_input").comma();

$('#notDefined').change(
	
	    function(){
	        if ($(this).is(':checked') && $(this).val() == 'na') {
	        	$('#DefinedDetail').attr('placeholder', '');  
	        	$('#DefinedDetail').attr('value', '');  

	        	$('#DefinedDetail').attr('readonly', true);
	        }
	        
	        
	        
	    });

$('#Defined').change(function(){
		
	    
	       
	        if ($(this).is(':checked')) {
		        	$('#DefinedDetail').attr('placeholder', '액수를 입력해 주세요');  
		        	$('#DefinedDetail').attr('readonly', false);

	        	}
	        
	    });



//클릭시 주소 이동부분
$(".info_block").on("click",function(){
	let meetNo = $(this).find('.recommendMeetNo').val();
	console.log("meetNo" +meetNo);
	location.href="detail.do?meetNo="+meetNo+"&memNo="+$("#hiddenHostNo").val();
});

//검색창 none->block 변경 부분
$(".header_search").click(function () {
    $(".after_click").css("display", "block");
});
$(".location_title_container").click(function () {
    //alert($(".location_position").css("display"));
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
        clearInterval(stopInterval);
    });
    //이거 쓰기mouseup
}//for

var num = 0;

function timeInterval(){
	$(`td`).css("background-color", "white");
    $(`td`).css("color", "black");
    $(".tabPanel").css("display", "none");
    $("td:eq(" + num + ")").css("background-color", "#7db341");
    $("td:eq(" + num + ")").css("color", "white");
    $(".tabPanel:eq(" + num + ")").css("display", "block");
//
//    $("td:eq(" + num + ")").click();
//    console.log(num);
    num++;
    if (num == 6) {
        num = 0;
    }
}

var stopInterval = setInterval(timeInterval, 1400);





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


$('.header_meetup_manage').click(function(){

	location.href="/babmukja/meetup/manage.do?hostNo="+$("#hiddenHostNo").val();

});

var tagNum=0;
$(document).ready(function() {
		
	  $('.meetup_tag').keydown(function(event){
		  if(event.keyCode == 13) {	      
			  event.preventDefault();
			  
			  tagNum++;
			  
			  alert(tagNum);
			  
			  if(tagNum<5){
			  		$('.modal_meetup_tagSelected_box').append(`
              		<span class="selected_tag_container`+tagNum+`">
              		<span class="tag_letter">`+$('.meetup_tag').val()+`</span>
              		<span><i class="fas fa-times-circle" id="tag_X_Icon"></i></span>
              		</div>	  
			  		`);
	     
		$('.meetup_tag').val("#");
	      
	      }//tagNum if
	      else if(tagNum>=5) {
	  	    	tagNum=5;
	  	    	alert("태그는 최대 4개까지 생성 가능합니다");
	      }//else if
	    }//if
	  });
	});

$(document).on("click",'#tag_X_Icon',function(){

	$(this).parent().parent().remove();
	
	
	if(tagNum == 5){
		tagNum=tagNum -2;
	}else{
		tagNum--;
	}
	
	alert(tagNum);
	
	if (tagNum<=0){
	tagNum=0;
	}

	
});







$(document).on("click","#modal_location_minus",function(){
	
});
var tagVal="";
$('#modalSave').click(function(){
	
	
	for(let i=0; i<=4; i++ ){

	if($(".selected_tag_container"+i+ "> .tag_letter").text() !=""){
	tagVal = $(".selected_tag_container"+i+ "> .tag_letter").text() +"," +tagVal;
		}//if
	}
	$(".meetup_hiddenTag").val(tagVal);
	alert($(".meetup_hiddenTag").val());
	alert("모임이 등록되었습니다. 당신의 멋진 음식 여정을 응원합니다.");
});
