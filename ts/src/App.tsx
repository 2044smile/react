import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store'
import { Resturant } from './model/resturant';

// function App() {
let data:Resturant = {
    name: "Tim",
    address: {
      city: "seoul",
      country: "korea"
    },
    menu:[{name:"창석이네 고기집",price:2000,category:"가쥬아"},{name:"순신이네 해산물",price:30000,category:"바다"}]
}
const App:React.FC = () => {  // FC: Function Componet
  return (  // 함수 컴포넌트
    <div className="App">
      <Store {data} />
    </div>
  );
}

export default App;
