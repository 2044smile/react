import React from 'react';

function TodoDetail({ todo, onDelete }) {
    return (
        <li>
            {todo}
            <button onClick={onDelete}>삭제</button>
        </li>
    )
}

export default TodoDetail;