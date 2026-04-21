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

<br><br>

## 4. JS로  HTML 다루기 (DOM과 이벤트)
- JS 파일이 HTML에 연결되어 있으면, JS를 통해 HTML 요소(Element)를 읽고 수정할 수 있다.


- `console.dir(element)`를 사용하면 HTML요소를 JS의 객체 형태로 자세히 볼 수 있다.
- 요소 찾기 (추천 순위):
  1. `querySelector`, `querySelectorAll`
  2. `getElementById`
  3. `getElementsByClassName`, `getElementsByTagName`

<br><br>

## 5. 이벤트(Event) 리스너

- 이벤트는 클릭, 마우스 오버, 화면 크기 조절 등 브라우저에서 일어나는 모든 사건을 의미. JS는 이벤트를 Listen(대기) 하다가, 이벤트가 발생하면 지정된 함수를 실행한다.

<br>

```JavaScript
// 이벤트 핸들러(함수) 선언
function handleTitleClick() {
    console.log("clicked!");
}

// 이벤트 리스너 부착: "click" 이벤트가 발생하면 handleTitleClick 실행
title.addEventListener("click", handleTitleClick);
```

<br><br>

**`addEventListener` vs `on 이벤트`**
1. `title.addEventListener("click", handleTitleClick)` (권장)
2. `title.onclick = handleTitleClick`

-> `addEventListener`를 사용하면 나중에 `title.removeEventListener("click", handleTitleClick)`을 통해 이벤트를 지울 수 있고, 같은 클릭 이벤트에 여러 개의 함수를 동시에 실행시킬 수 있기 때문에 훨씬 유연하게 동작 가능

<br><br>

## 6. JS와 CSS의 역할 분리
- JS에서 style을 직접 수정하는 것은 좋지 않음 

- 디자인(스타일)은 CSS가 담당하고, JS는 HTML 요소에 CSS클래스를 추가하거나 빼는 역할만 하는 것이 이상적인 구조 

**1.단게: className 사용하기**
CSS에 미리 `.active`라는 클래스를 만들어 두고, JS에는 이벤트가 발생할 때마다 해당 요소의 클래스 이름을 바꿔준다.

```CSS
/* CSS 파일 */
h1 { 
  color: cornflowerblue; 
}
.active { 
  color: tomato; 
}
```

```JavaScript
/* JS 파일 */
function handleTitleClick() {
    const clickedClass = "active"; // 오타 방지를 위해 변수(상수)로 저장
    
    if (h1.className === clickedClass) {
        h1.className = ""; 
    } else {
        h1.className = clickedClass;
    }
}
```

 - className을 일반 문자열로 설정하면 철자 하나가 일치하지 않다면 의도한대로 동작하지 않는다. 이 현상을 raw String이라 하는데 raw String이 반복되면 상수변수를 만들어서 저장하여 사용하는 것이 더 안전하다

<br><br>
## 7. classList와 toggle
`className`은 **기존에 있던 클래스를 싹 다 지워버리고 통째로 교체**한다는 단점이 존재한다 이를 방지 하기 위해 `classList`를 사용

<br>

**2단계: classList 사용하기(add, remove, contains)**
```JavaScript
function handleTitleClick() {
    const clickedClass = "clicked";
    
    // classList에 "clicked"가 포함되어(contains) 있다면?
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass); // 제거
    } else {
        h1.classList.add(clickedClass);    // 추가
    }
}
```

<br>

**3단계: toggle**
- toggle은 **클래스가 존재하면 제거하고, 존재하지 않으면 추가해 주는 작업**을 단 한 줄로 끝낸다. 위에서 작성한 `if-else`문과 똑같이 동작한다.

```JavaScript
function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
```
<br><br>

## 8. 로그인 폼 다루기(Input Values & Form)

#### **1.HTML의 기본 기능(Validation) 활용하기**

JS에서 `if`문을 사용하여 "값이 비어있는지", "글자 수가 너무 긴지" 일일이 확인하는 대신, **HTML5의 내장 속성**을 사용할 수 있다.

##### *이 속성들이 정상적으로 작동하기 위해서는 `<input>`요소가 반드시 `<form>`태그 안에 있어야 한다*


- `required`: 필수 입력 항목 지정 (값이 비어있으면 브라우저가 자체적으로 경고 띄움)
- `maxlength = "15"`: 최대 입력 글자 수를 15자로 제한
- `placeholder = "..."`: 사용자가 입력하기 전에 보여주는 힌트 텍스트

<br>

```HTML
<body>
    <form id="login-form">
        <input 
            required  
            maxlength="15"  
            type="text"
            placeholder="What is your name?"
        />
        <input type="submit" value="Log In"/>
    </form>
    <script src="app.js"></script>
</body>
```
<br>

#### 2. JS로 Input값(Value) 가져오기

사용자가 입력란에 적은 텍스트를 JS로 가져올 때는 요소의 `.value` 속성을 사용한다.

```JavaScript
//? 1. HTML에서 필요한 요소들을 선택해서 가져오기(Selector)
//? document.querySelector는 CSS 선택자처럼 요소를 찾을 수 있다 (#은 아이디 태그)
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//? 2. 버튼이 클릭되었을 때 실행될 함수 정의 (이벤트 핸들러)
function onLoginBtnclick(){
    const username = loginInput.value;  //? 사용자가 input 창에 입력한 텍스트 값(value)을 변수에 저장
    console.log(username);
}

//? 3. 이벤트 리스너 추가(Event Listener)
//? loginButton을 클릭하면 onLoginBtnclick 함수를 실행하기
loginButton.addEventListener("click", onLoginBtnclick);  
//? 주의: 함수 이름 뒤에 괄호()를 붙이면 클릭 안해도 바로 실행되므로 주의!
```
