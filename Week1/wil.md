#1주차
### HTML

1. MarkUp Language 

문서를 구조적으로 만든다. 즉, 텍스트 외에 위계나 텍스트 정보를 준다. tag를 이용한다.

<tagname> content</tagname>

예시코드
<!DOCTYPE html>
<html>
<head>
 <title>Hello</title>
</head>
<body>
 <h1>신짱구</h1>
 <p>안녕하세요. 저는 떡잎마을에 사는 신짱구입니다. 5살이에요.</p>
 <h2>
 가족 관계
 </h2>
 <p>엄마, 아빠, 저, 동생. 그리고 흰둥이와 함께 살아요.</p>
</body>
</html>

1. HyperText 

“문서의 text를 넘어서” → link, a(anchor)태그를 사용한다.

<a href=”./링크하고자 하는 페이지”>content</a>

*href=hyper reference

### JS

script 태그 사용하기
<script>
    console.log("...");
    alert("...");
</script>

*HTML은 MarkupLanguage이지, 프로그래밍 언어는 아니다. 따라서 스크립트 태그를 브라우저에 심어서 HTML과 연결하여 명령을 내린다.

경량 스크립트 언어이기 때문에 문제점들이 많다. 이를 해결하고자 한 ECMA Script, TypeScript는 방학때 공부해보자.