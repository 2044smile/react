import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// 컴포넌트는 React의 props를 통해 데이터를 받을 수 있고, JSX를 반환해서 화면에 UI를 그려주는 역할
// props는 React 컴포넌트 간에 데이터를 전달할 때 사용하는 객체
// const 로 이 컴포넌트를 선언한 이유는 컴포넌트 자체가 재할당되지 않도록 하기 위해서
const TodoItemInputField = (props) => {
  const [input, setInput] = useState(""); // React의 함수형 컴포넌트 내부에서 상태(state)를 관리하기 위해 변수를 선언
  // React의 useState 훅을 이용해서 컴포넌트 내에서 상태를 선언

  const onSubmit = () => {
    props.onSubmit(input);
    setInput("");
  };

  return (<div>
    <TextField
      id="todo-item-input"
      label="Todo Item"
      variant="outlined"
      onChange={(e) => setInput(e.target.value)} value={input}  // input의 값을 업데이트한다.
    />
    <Button variant="outlined" onClick={onSubmit}>Submit</Button>
  </div>)
};

const TodoItemList = (props) => {
  return (<div>

  </div>);
}

function App() {
  return (
    <div className="App">
      <TodoItemInputField onSubmit={() => {}} />
      <TodoItemList />
    </div>
  );
}

export default App;
