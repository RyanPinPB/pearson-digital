import React from 'react';
import './UserOutput.css';

class UserOutput extends React.Component {
  render() {
    const style = {
      fontSize: '30px',
      textDecoration: 'underline',
      fontWeight: '700',
    };
    return (
      <section className='user-output'>
        <p className='output-text-one' style={style}>
          Welcome {this.props.text}
        </p>
        <p className='output-text-two'>
          A list of services that we provide and why we are the best
        </p>
      </section>
    );
  }
}

export default UserOutput;
