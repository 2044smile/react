import React from "react";

// React Element는 한 번 생성되면 수정되지 않는 불변 객체이다.
// 하지만 toLocaleTimeString 은 React의 상태 관리가 아닌, 시간을 매번 새로 가져와서 표시하는 방식이니 상태가 아닌 렌더링 과정에서 변화가 일어난다.
function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;