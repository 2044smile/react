import React, { useState } from 'react';
import './App.css';
import Store from './Store'
import { Address, Resturant } from './model/resturant';

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
  const [myRestaurant, setMyRestaurant] = useState<Resturant>(data)  // <> Generic 문법; Restaurant type 으로 사용된다.
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address:address})
  }

  return (  // 함수 컴포넌트
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
    </div>
  );
}

export default App;
