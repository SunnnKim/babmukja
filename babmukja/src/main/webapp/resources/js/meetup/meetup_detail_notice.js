	$(".area").click(function () {
		$(".area").animate({ left: -600 }, 1000);
	});



	for (let i = 0; i <= 4; i++) {
		let number = i;

		$("td:eq(" + number + ")").click(function () {

			$(`td`).css("background-color", "white");
			$(`td`).css("color", "black");
			$(".tabPanel").css("display", "none");
			$("td:eq(" + number + ")").css("background-color", "#7db341");
			$("td:eq(" + number + ")").css("color", "white");
			$(".tabPanel:eq(" + number + ")").css("display", "block");

		});

	}//for


	for (let k = 0; k < 4; k++) {
		
		console.log("k 시작 :" + k);
		$(".subInfo > .subInfoPic > i:eq(" + k + ")").mouseover(function () {

			console.log("aaa : " + k);
			$(".infoTag:eq(" + k + ")").addClass("pseudo");
			console.log(k);

		});
		$(".subInfo > .subInfoPic > i:eq(" + k + ")").mouseleave(function () {

			$(".infoTag:eq(" + k + ")").removeClass("pseudo");



		});

	}//for
	//intro 를 넘겨 받아서...             
	var intro = `${intro}`;

	dataProcess();

	//java에서 array를 받을 수 있게 바꾸어 세팅주기         
	jQuery.ajaxSettings.traditional = true;
	var fileDirectory = [];// delete 부분에 해당 파일을 지우기 위해서
	var dbPath;//delete 부분에 depath 를 적용해 주기 위해서
	var tempFileDirectory = new Array();//후에 세이브 버튼을 누를때 array로 파일경로를 보내주기 위해서    


	//save 눌렀을 때 데이터 처리// 나중에 위로 올리기
	/*  contentType: "text/xml;charset=utf-8", */


	$(document).on("click", "#introSave", function () {


		var deleteDirectory = [];//후에 이경로에 있는 파일들은 지우기
		let data = {};
		data.fileDirectory = fileDirectory;
		data.deleteDirectory = deleteDirectory;
		dbPath = $('#summernote').val();
		data.dbPath = dbPath;
		for (let i = 0; i < tempFileDirectory.length; i++) {
			if ($('#summernote').val().includes(tempFileDirectory[i]) == false) {
				deleteDirectory.push(tempFileDirectory[i]);

				continue;
			}

			fileDirectory.push(tempFileDirectory[i]);

		}  //for





		/*    var text =$('#summernote').val();
		   var encoded = encodeURIComponent(text) */
		$.ajax({
			data: data,
			type: "POST",
			url: '/babmukja/meetup/updateIntro.do',
			enctype: 'multipart/form-data',
			success: function (data) {

				$("#tabPanel1").html(`<div class="editDelete"><div id="introEdit">수정</div><div id="introDelete">삭제</div>` + data);
			}
		});

	}); //save 끝

	//수정을 눌렀을 때
	$(document).on("click", "#introEdit", function () {

		$.ajax({
			url: '/babmukja/meetup/editIntro.do',
			enctype: 'multipart/form-data',
			success: function (data) {
				$("#tabPanel1").html(`
                                 	<div class="saveReturn"><div id="introReturn">돌아가기</div><div id="introSave">저장</div><div id="introHeader" >모임을 소개해 주세요~^^</div><div>
                                     <textarea id="summernote" name="editordata">`+ data + `</textarea>`
				);
			}
		});



	});


	$(document).on("mouseover", document, function () {
		$('#summernote').summernote({
			height: 500,                 // set editor height
			minHeight: null,             // set minimum height of editor
			maxHeight: null,             // set maximum height of editor
			focus: true,                  // set focus to editable area after initializing summernote
			callbacks: { // 콜백을 사용
				// 이미지를 업로드할 경우 이벤트를 발생
				onImageUpload: function (files, editor, welEditable) {
					console.log(files[0]);
					sendFile(files[0], editor, welEditable);

				}
			}//call back
		});


	});
	//수정 끝 

	//return 을 눌렀을때

	$(document).on("click", "#introReturn", function () {

		dataProcess();

	});

	//삭제를 눌렀을때
	$(document).on("click", "#introDelete", function () {
		data = {};
		data.fileDirectory = fileDirectory;
		$.ajax({
			url: '/babmukja/meetup/deleteIntro.do',
			data: data,
			type: "POST",
			enctype: 'multipart/form-data',
			success: function (data) {

				$("#tabPanel1").html(`<span class="writeIntro"> <i class="fas fa-plus-circle fa-3x"></i></span>`);
				dataProcess();
			}
		});

	});




	function dataProcess() {

		if (intro == "") { // intro가 null 이면 등록 폼 버튼 을 불러준다.


			console.log("intro가 null 입니다.");


			$(document).on("click", ".writeIntro", function () {
				$("#tabPanel1").html(`
            	<div class="saveReturn"><div id="introReturn">돌아가기</div><div id="introSave">저장</div><div id="introHeader" >모임을 소개해 주세요~^^</div><div>
                <textarea id="summernote" name="editordata"></textarea>
                 `);
			});


			$(document).on("mouseover", document, function () {
				$('#summernote').summernote({

					height: 500,                 // set editor height
					minHeight: null,             // set minimum height of editor
					maxHeight: null,             // set maximum height of editor
					focus: true,                  // set focus to editable area after initializing summernote
					callbacks: { // 콜백을 사용
						// 이미지를 업로드할 경우 이벤트를 발생
						onImageUpload: function (files, editor, welEditable) {
							console.log(files[0]);
							sendFile(files[0], editor, welEditable);

						}
					}//call back
				});


			});



		} else { //null 이 아니면 원래 자료를 뿌려준다.
			console.log("intro 는 :" + intro + "정래");
			console.log("intro가 null 이 아닙니다.");
			$("#tabPanel1").html(`<div class="editDelete"><div id="introEdit">수정</div><div id="introDelete">삭제</div>` + `${intro}`);




		}//else


	}//data process








	//파일 생성 폼
	function sendFile(file, editor, welEditable) {
		// 파일 전송을 위한 폼생성
		console.log("전달가나 확인");
		data = new FormData();
		data.append("file", file);
		console.log("file" + file);
		console.log(data);


		$.ajax({ // ajax를 통해 파일 업로드 처리
			data: data,
			type: 'POST',
			url: "<c:url value='/meetup/uploadImage.do' />",
			cache: false,
			contentType: false,
			processData: false,
			success: function (url) { // 처리가 성공할 경우
				//                                    
				// 에디터에 이미지 출력

				let path = url.filePath;
				let sysFileName = url.sysFileName;

				tempFileDirectory.push(url.filePath + url.sysFileName);
				$("#summernote").summernote('editor.insertImage', "<c:url value='/meetup/download.do' />" + "?path=" + path + sysFileName);

			}
		});
	}
