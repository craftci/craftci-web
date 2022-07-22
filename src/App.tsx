import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HeaderContainer from './viewport/components/headers/HeaderContainer';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer></HeaderContainer>
    </BrowserRouter>
  );
}

export default App;
