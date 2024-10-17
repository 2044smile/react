import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";
// index.js 는 보통 전체 애플리케이션의 진입점 역할
// 즉, React 애플리케이션이 실행되기 시작하는 파일이 index.js 이기 때문에 
// CRUD 기능을 여기 직접 넣기보다는 index.js 에서 최상위 컴포넌트 App.js 를 렌더링하는 방식으로 구현하는 것이 좋다.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
