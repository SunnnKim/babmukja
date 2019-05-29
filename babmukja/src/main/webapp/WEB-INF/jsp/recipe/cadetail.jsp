<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value="/resources/css/recipe/recipeCaDetail.css"/>">
    <script src="<c:url value="/resources/js/jquery-3.2.1.min.js"/>"></script>
    <title>Document</title>

</head>
<body>
    <div class="container">
        <div class="searchRecipe">            
            <div class="searchbox">
                <div id="cate">레시피 > (카테고리)</div>
                <div class="searchin">
                    <input type="text" id="search-input" name="search" placeholder="레시피를 검색하세요.">
                </div>
                <div>
                    <span class="icon"><i class="fa fa-search"></i></span>
                </div>
            </div>
            <div class="searchresult">
                <div class="check">                   
                    <input type="checkbox">영유아&nbsp;&nbsp;&nbsp;
                    <input type="checkbox">당뇨병&nbsp;&nbsp;&nbsp;
                    <input type="checkbox">임산부
                    <br>
                    <input type="checkbox">채식주의
                    <input type="checkbox">할랄푸드
                    <input type="checkbox">저염식
                    
                </div>
                <div class="select">
                    <button id="favorite">인기순</button>
                    <button id="kcal">열량순</button>
                    <button id="spicy">맵기순</button>
                </div>
            </div> 
            <hr>
            <div class="ca-list">
            <c:forEach var="ca" items="${calist }">
                <div>
                    <img class="mem-profile" src="">
                    <span>${ca.memNickname }</span>
                    <div>${ca.title }</div>
                    <div>조회수 :${ca.viewCnt }</div>
                    <div>평점 : ${ca.rating }</div>
                    <img src="${ca.imgPath}">
                </div>
             </c:forEach>
            </div>
        </div>
    </div>

    <script>
        $("#search").focus(function () { 
            $(".searchresult").css(
                "display", "grid"                
            );            
        });

        $("#kcal").click(function () {
            window.open(
                "URL",
                "_blank",
                "top=0,left=0,width="+w+",height="+h+",toolbar=0,status=0,scrollbars=1,resizable=0"
                )
        });

     
    </script>
</body>
</html>