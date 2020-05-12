import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {
  render() {
    return (
      <section className='user-input'>
        <div className='input-container'>
          <input
            type='text'
            className='user-entry'
            placeholder='enter username'
          />
          <button onClick={this.props.submit} type='submit'>
            LOG IN
          </button>
        </div>
      </section>
    );
  }
}

export default UserInput;
