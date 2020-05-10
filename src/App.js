import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

function App() {
  // return <div className='App'></div>;
  return (
    <div className='page-wrap'>
      <Header />
      <main className='content-wrap'>
        <UserInput />
        <UserOutput />
      </main>
    </div>
  );
}

export default App;
