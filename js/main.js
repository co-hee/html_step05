//document.querySelector('h1').style.display = 'none'; /* 라이브러리 안 쓴 순수 자바스크립트 */



$(function () { //'html이 만들어지고 난 뒤에 실행하라'라는 의미
    $('button').on('click', function () {
        $('h1').toggleClass('on')
    });
    $('.mainSlide').slick();



})


//index() : 번호를 받는 함수

//액티브와 섹션 클래스명은 금지. 풀페이지 실행하면 자동으로 붙는 이름



//(함수) {객체} [배열]
//제이쿼리(함수들을 정의해놓은 프로그램) : 메소드체인


/* 만들어 놓은 명령어를 외워서 쓰는 방법, 제이쿼리 쓰는 방식 */

// window.addEventListener('DOMContentLoaded', function () {
//    document.querySelector('button').addEventListener('click', function () {
//         document.querySelector('h1').classList.toggle('on')
//     })
// });
