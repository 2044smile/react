import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "Harry",
        comment: "Hello",
    },
    {
        name: "Jane",
        comment: "What's up",
    },
    {
        name: "DD",
        comment: "I am DD",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {  // map 은 comments 배열의 각 요소를 반복하면서 새로운 컴포넌트를 반환
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
            {/* <Comment name="Harry" comment="Hello"/>
            <Comment name="Jane" comment="What's up"/>
            <Comment name="DD" comment="I am happy"/> */}
        </div>
    );
}

export default CommentList;