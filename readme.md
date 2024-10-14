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

### command

- npx create-react-app app
- npm start => 애플리케이션 실행

## Reference

- nvm
- node.js v20.18.0
