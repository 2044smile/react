import React from 'react';
import TodoDetail from './TodoDetail';

function TodoList({ todos, onDelete }) {
    return (
        <ul>
            {todos && todos.map((todo, index) => (
                <TodoDetail
                    key={index}
                    todo={todo}
                    onDelete={() => onDelete(index)}  // 인덱스를 기반으로 삭제
                />
            ))}
        </ul>
    );
}

export default TodoList;