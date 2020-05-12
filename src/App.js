import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'new visitor',
  };

  submitHandler() {
    const inputValue = document.querySelector('.user-entry').value;
    this.setState({
      username: inputValue,
    });
    console.log(inputValue);
  }

  render() {
    return (
      <div className='page-wrap'>
        <Header />
        <main className='content-wrap'>
          <UserInput submit={this.submitHandler.bind(this)} />
          <UserOutput text={this.state.username} />
          <UserOutput />
        </main>
      </div>
    );
  }
}

//version with hooks

// function App() {
//   const [displayText, setState] = useState(initialState)

//   inputChangeHandler = (text) => {

//   };

//   return (
//     <div className='page-wrap'>
//       <Header />
//       <main className='content-wrap'>
//         <UserInput onChange={() => inputChangeHandler()} />
//         <UserOutput />
//         <UserOutput />
//       </main>
//     </div>
//   );
// }

export default App;
