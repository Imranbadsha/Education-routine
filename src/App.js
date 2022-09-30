// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Question from './Components/Question/Question';
import React, { Component } from 'react';
function App() {
  return (
    <div >
      <Header></Header>
      <Main></Main>
      <Question></Question>
    </div>
  );
}

export default App;
