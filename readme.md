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


### command

- npx create-react-app app
- npm start => 애플리케이션 실행

## Reference

- nvm
- node.js v20.18.0
- https://www.youtube.com/watch?v=N7qlk_GQRJU&t=428s

