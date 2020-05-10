import React from 'react';
import './Header.css';

// function Header() {
//   return (
//     <header>
//       <div className='logo'>LOGO</div>
//       <div className='menu-container'>
//         <ul className='main-menu'>
//           <li className='menu-item'>HOME</li>
//           <li className='menu-item'>ABOUT</li>
//           <li className='menu-item'>SERVICES</li>
//           <li className='menu-item'>CONTACT</li>
//         </ul>
//       </div>
//     </header>
//   );
// }

class Header extends React.Component {
  render() {
    return (
      <header className='site-header'>
        <div className='logo'>LOGO</div>
        <div className='menu-container'>
          <ul className='main-menu'>
            <li className='menu-item'>HOME</li>
            <li className='menu-item'>ABOUT</li>
            <li className='menu-item'>SERVICES</li>
            <li className='menu-item'>CONTACT</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
