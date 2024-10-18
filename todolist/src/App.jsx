import React, { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState('');  // 상태 정의

  // 새로운 할 일을 추가하는 함수
  const addTodo = (todo) => {
    setTodos([...todos, todo]);  // 기존 할 일 리스트에 새 할 일 추가
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>투두 리스트</h1>
      <TodoCreate onAdd={addTodo} />  {/* 자식 컴포넌트로 함수 전달 */}
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;