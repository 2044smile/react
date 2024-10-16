# react

### react란

- 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
- 사용자와 웹사이트 간에 상호작용을 돕는 인터페이스를 만들기 위한 JavaScript 기능 모음집

### 기능

- 라이브러리
  - 자주 사용되는 기능들을 정리해 모아 놓은 것
  - 문자열 관련 기능
  - 숫자관련 기능
  - 날짜 관련 기능
- 사용자 인터페이스 (User Interface, UI)
  - UI 라이브러리
    - 화면을 만들기 위한 기능들을 모아 놓은 것
    - Ngularjs(Google), React(facebook), Vue.js(SOAPLE)
- 프레임워크 vs 라이브러리
  - 프레임워크란
    - 프로그램의 흐름에 대한 제어 권한을 개발자가 아닌 프레임워크가 가지고 있다.
    - 제어 권한: 프레임워크1
  - 라이브러리란
    - 흐름에 대한 제어를 하지 않고 개발자가 필요한 부분만 필요할 때 가져가 사용하는 형태
    - 제어 권한: 개발자

### 리액트의 장점

1. 빠른 업데이트와 렌더링 속도
  - 업데이트: 화면에 나오는 내용이 변경되는 것 -> Virtual DOM, 빠른 업데이트
    - DOM: 웹 페이지를 정의하는 하나의 객체, 하나의 웹사이트에 대한 정보를 다 담고 있는 것
2. Component-Based
  - 구성요소
  - 레고 블록 조립하듯 컴포넌트들을 모아서 개발
3. 재사용성 (Reusability)
  - 다시 사용이 가능한 성질
  - 개발 기간이 단축된다.
  - 유지 보수가 용이하다.

### 리액트의 단점

1. 방대한 학습량
  - Virtual DOM, JSX, Component, State, Props
2. 지속적인 버전 업데이트
3. 높은 상태관리 복잡도

### JSX

- JavaScript(JS) + X mean A syntax extension to JavaScript => 확장 문법
- JavaScript + XML/HTML

```js
const element = <h1>Hello World</h1>;
```

#### JSX의 역할

- 내부적으로 XML/HTML 코드를 JavaScript 로 변환하는 역할
- JSX 를 사용하면 장점들이 많다.

```js
React.createElement(
  type,  // 유형, 타입 e.g) div, spen
  [props],  // 속성
  [...children]  // 자식 엘리먼트
)

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>
  }
}

ReactDOM.render(  // 실제 화면에 렌더링
  <Hello toWhat="World" />
  document.getElementById('root')
)

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(  // 실제 화면에 렌더링
  React.createElement(Hello, { toWhat: 'World' }, null),
  document.getElementById('root')
)

// JSX 를 사용한 코드
const element = (
  <h1 className="greeting">
    Hello, World!
  </h1>
)

// JSX 를 사용하지 않은 코드
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, World!'
)
-> React.createElement() 의 결과로 아래와 같은 객체가 생성된다.
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
}
```

#### JSX의 장점

- 코드 간결
- 가독성 향상
- 버그를 발견하기 쉽다.
- Injection Attacks 방어

```js
// JSX 사용
<div>Hello, {name}</div>

// JSX 미사용
React.createElement('div', null, `Hello, ${name}`)
```

### Elements

- 어떤 물체를 구성하는 성분
- 리액트 앱을 구성하는 가장 작은 블록들
- React Elements
  - 화면에서 보이는 것들을 기술
  - 자바스크립트 객체 형태로 존재
  - 가상 DOM(Virtual DOM)에서 만들어지고, 나중에 실제 DOM 으로 변환돼서 브라우저에 표시 돼
  - 불변이기 때문에 한 번 생성되면 수정할 수 없다
    - Elements 생성 후에는 children 이나 attributes를 바꿀 수 없다
- DOM Elements
  - 브라우저에서 실제로 렌더링된 HTML 요소
  - 화면에 표시되는 HTML 태그들이 바로 DOM Element
- 흐름
  1. React 코드를 작성하면, 그 안에 있는 JSX (React Element) 가 가상 DOM 에서 관리된다.
  2. React는 변경 사항을 가상 DOM에 반영하고, 실제로 변경이 필요한 부분만 DOM Element 로 변환해서 브라우저에 업데이트 한다.

## Components와 Props의 정의

![alt text](image-11.png)

- Component-Based
  - 레고 블록 조립하듯 컴포넌트들을 모아서 개발
  - 어떤 속성(Props)들을 입력으로 받아서 그에 맞는 React Element 를 생성하여 리턴한다
- Props(Property; 속성)
  - ![alt text](image-13.png)
  - Component의 속성
  - 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
  - 같은 React Component 에서 눈에 보이는 글자나 색깔 등의 속성을 변경하고 싶을 때 사용하는 Component 의 속 재료이다
  - ![alt text](image-14.png)

### Component 만들기

- Function Component
  ```js
  // 간단한 코드를 장점으로 가진다.
  function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
  }
  ```
- Class Component
  ```js
  class Welcome extends React.Component { // React.Component 를 상속받는다.
    render() {
      return <h1>안녕, {this.props.name}</h1>;
    }
  }
  ```

### Component의 이름

- Component 이름은 항상 대문자로 시작해야 한다. 

### Component 렌더링

![alt text](image-15.png)

- 붕어빵 틀(Component)에서 찍어서 나온 Element 라는 붕어빵이 실제로 화면에 보인다.
- 렌더링을 위해서는 Component 로 부터 Element 를 만들어야 한다.

### Component 합성

- 여러 개의 Component 를 합쳐서 하나의 Component 를 만든다 즉 Component 안에 다른 Component를 쓸 수 있다.
- 복잡한 화면을 여러 개의 Component로 나눠서 구현 가능

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App(props) {
  return (
    <div>
    // Welcome 컴포넌트를 여러 개 사용한다. 즉 App 은 Welcome 컴포넌트를 포함하고 있다.
      <Welcome name="Mike" />
      <Welcome name="Tim" />
      <Welcome name="Jane" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

![alt text](image-16.png)

### Props의 특징

- READ ONLY; 값을 변경할 수 없다.
- 붕어빵 다 구워졌는데 속재료를 바꿀 수 없음
- 새로운 값을 Component 에 전달하여 새로 Element를 생성
- React Component 의 Props 는 변경할 수 없고, 같은 Props 가 들어오면 같은 Element를 리턴해야 한다. 

#### JavaScript 함수의 속성

```js
// 입력 값(input)을 변경하지 않으며, 같은 입력 값에 대해서는 항상 같은 출력 값을 리턴
// 모든 React Component는 그들의 Props에 관해서는 Pure 함수 같은 역할을 해야 한다.
// 모든 React Component는 Props를 직접 바꿀 수 없고, 같은 Props에 대해서는 항상 같은 결과를 보여줄 것!
function sum(a, b) {
  return a + b;
}
// 입력 값(input)을 변경
function withdraw(account, amount) {
  account.total -= amount;
}
```

### Props 사용법

```js
function App(props) {
  return (
    <Profile
        name="Tim"
        introducation="Hi my name is Tim"
        viewCount={1500}
    />
  );
}
// Props 아래와 같은 형태의 JavaScript 객체가 된다.
{
  name:"Tim",
  introduction:"Hi my name is Tim",
  viewCount: 1500
}
```

## 브라우저는 어떻게 페이지를 화면에 렌더링 할까?

![alt text](image.png)

- DOM(Document Object Model) - 문서 객체 모델
  - HTML을 브라우저가 해석하기 편한 방식으로 변환한 객체 트리
    ![alt text](image-1.png)
- Render Tree
  - Render Tree는 웹 페이지의 `청사진` 이라고 볼 수 있음
- Layout
  - Render Tree를 기반으로 실제 웹 페이지에 요소들의 배치를 결정하는 작업
- Painting
  - 실제로 요소들을 화면에 그려내는 과정

### 업데이트는 어떻게 이루어질까?

![alt text](image-2.png)

- 이벤트에 따라 화면이 실시간으로 변화하는 것 ex) 좋아요 버튼 등
- JavaScript가 DOM을 수정하면 업데이트가 발생 함
- DOM이 수정되면 Critical Rendering Path 가 다시 실행 됨
- **Layout, Painting은 매우 비싼 과정이다**
  - 비싸다는 건 연산이 많이 필요하고, 시간이 오래 걸린 다는 것
  - 잦은 Reflow, Repaint는 웹 성능 악화의 주범 
  - `Reflow` Layout을 다시 한다
  - `Repaint` Painting을 다시 한다
  - **Good Practice**
    - ![alt text](image-3.png)
    - DOM 은 한번만 수행
- 동시에 발생한 업데이트를 모아서 한번에 수정을 해야 된다.
  - DOM 수정, Reflow, Repaint 발생 최소화
- React JS 는 내부적으로 프로그래머가 신경 쓰지 않아도 동시에 발생한 업데이트들을 모아서 최소한의 횟수로 DOM을 수정할 수 있도록 자동화를 해준다
  - 즉 추상화 되어 있고, React의 렌더링 프로세스를 사용하고 있다.

#### React의 렌더링 프로세스

![alt text](image-4.png)

- React는 2단계를 거쳐 화면에 UI를 렌더링 함
- Render Phase 1
  - ![alt text](image-6.png)
  - 즉 컴포넌트를 호출해 결과값을 계산하고 `React Element` 로 결과값이 나온다.
- Render Phase 2
  - React Element 들을 모아 Virtual DOM 생성
    - ![alt text](image-7.png)
    - React Element 라고 부르는 객체 값의 모임
      - 실제 DOM은 아님 (복제판)
      - 값으로 표현된 UI (Value UI) 라고 이해하는게 더 정확함
- **React Componet -> React Element -> Virtual DOM**

![alt text](image-9.png)

- Commit Phase
  - Virtual DOM을 Actual DOM에 반영함

![alt text](image-10.png)

- DOM 수정을 최소화 하기 위해서 (대부분의 상황에 충분히 빠른 업데이트를 보장하기 위해서)

### 총 정리

- 순수한 JavaScript만 이용해 DOM을 조작할 때에는 DOM 수정을 최소화 해야 한다
  - Reflow, Repaint를 최소한으로 발생시키기 위함
  - 동시에 발생하는 업데이트를 최대한 모아 한번만 DOM을 수정해야 함
  - 서비스 규모가 커질수록 쉽지 않음
- React는 자체적인 렌더링 프로세스를 사용하므로 이런 걱정에서 자유로움
  - Render Phase와 Commit Phase로 나뉨
  - Render Phase에 Virtual DOM을 생성하여 동시에 발생하는 업데이트를 모음
  - Commit Phase에 Virtual DOM에 반영된 모든 업데이트를 Actual DOM에 한번만 반영함


### command

- npx create-react-app app
- npm start => 애플리케이션 실행

## Reference

- node.js v20.18.0
- https://www.youtube.com/watch?v=N7qlk_GQRJU&t=428s

