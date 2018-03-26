import React from 'react';
import Logo from '@/components/Common/Header/Logo';
import NavBar from '@/components/Common/Header/NavBar';
import NavBarNotification from '@/components/Common/Header/NavBarNotification';
import PhotoProfile from '@/components/Common/Header/PhotoProfile';
import './styles.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Logo />
        <NavBar>
          <NavBarNotification />
          </NavBar>  
        <PhotoProfile />
      </header>
    );
  }
}
/* <div className="wrapper">
<div className="container">
  <div className="header">
    <a href="#" className="c-logo">
      <div className="c-logo__elem c-logo__elem-white">go</div>
      <div className="c-logo__elem c-logo__elem-orange">it</div>
    </a>
    <div className="c-header__nav-bar">
      {items.map(item => (
        <NavLink
          key={item.module}
          exact
          className="c-header__icon"
          to={item.link}
        >
          <div className={`c-header__icon c-header__icon-${item.module}`}>
            <span className="c-header__tooltip">1</span>
          </div>
        </NavLink>
      ))}
    </div>
    <NavLink
      exact
      className="c-header__photo-profile"
      to={'/'}
    >
      <div className="c-header__photo-profile-circle"></div>
      <div className="c-header__photo-profile-semicircle"></div>
    </NavLink>
  </div>
</div>
</div> */