# 📒 노마드코더 바닐라 JS 강의 노트

## 1. 변수 (Variables)
- **`const`**: 상수. 값을 변경할 수 없음. (기본적으로 이걸 사용!)
- **`let`**: 값을 업데이트(재할당) 가능.
  - *주의:* 재할당할 때 `let` 키워드를 다시 붙이지 않음.
  ```javascript
  let myName = "sejung";
  myName = "sj"; // 가능!
  // let myName = "sj"; // 에러! (재선언 불가)
  ```

<br>

## 2. HTML과 JS의 연결 (DOM)
- 자바스크립트는 HTML을 변경하거나 읽어오기 위해 사용함.

- document: 브라우저에 존재하는 웹사이트 그 자체(객체).
  
<br><br>
**Element(요소) 가져오기:**
- `getElementById("id")`: ID로 요소 하나를 가져옴.

- `querySelector("selector")`: CSS 선택자 형식으로 요소를 가져옴.
   - 특징: 클래스 이름 등을 사용할 때 맨 첫 번째 요소만 가져옴.
   - ID를 가져올 때는 #을 명확히 붙여야 함. (예: #login-form)

```JavaScript
document.getElementById("login-form");
```
> *궁금증: getElementById vs querySelector 차이점?*

<br><br>

## 3. Form과 이벤트 (Forms & Events)
- Input 유효성 검사: required, maxlength 등이 작동하려면 반드시 input이 <form> 태그 안에 있어야 함.

- `자동 Submit:`

   - form 안에서 엔터를 치거나 버튼을 누르면 자동으로 submit 이벤트가 발생함.

   - 굳이 click 이벤트를 신경 쓸 필요 없음! -> submit 감지하기

   - **(중요) submit 후 새로고침이 되지 않도록 막아야 함 (preventDefault).**

<br>

```JavaScript
function onLoginSubmit(event) {
  event.preventDefault(); // 새로고침 막기
}
```