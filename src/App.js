import { createContext, useState } from 'react';
import './App.css';
import ShipMent from './Components/ShipMent/ShipMent';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
  <CategoryContext.Provider value={[count, setCount]}>
    <Home/>
    <Header/>
    <ShipMent/>
  </CategoryContext.Provider>
  );
}

export default App;