import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {
  render() {
    return (
      <section className='user-input'>
        <input type='text' className='user-entry' />
      </section>
    );
  }
}

export default UserInput;
