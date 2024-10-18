import React, { useState } from 'react';

function TodoCreate({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {  // JavaScript 문자열 메서드; trim 앞뒤 공백 제거
            onAdd(inputValue);  // 부모 컴포넌트(App.jsx)로 새 할 일을 전달
            setInputValue('');  // 입력 필드 초기화
        }
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="할 일 입력"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
             />
            <button onClick={handleAdd}>추가</button>
        </div>
    );
}

export default TodoCreate;