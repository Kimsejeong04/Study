//? 1. HTML에서 필요한 요소들을 선택해서 가져오기(Selector)
//? document.querySelector는 CSS 선택자처럼 요소를 찾을 수 있다 (#은 아이디 태그)
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


//? 2. 버튼이 클릭되었을 때 실행될 함수 정의 (이벤트 핸들러)
function onLoginBtnclick(){
    const username = loginInput.value;  //? 사용자가 input 창에 입력한 텍스트 값(vlaue)을 변수에 저장
    console.log(username);
}

//? 3. 이벤트 리스너 추가(Event Listener)
//? loginButton을 클릭하면 onLoginBtnclick 함수를 실행하기
loginButton.addEventListener("click", onLoginBtnclick);  //? 함수 이름 뒤에 괄호를 붙이면 클릭 안해도 바로 실행되므로 주의