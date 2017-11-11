import React, { Component } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.09);
  padding: 1.5%;
`;

const Logo = styled.img`
  width: 3.75em;
  float: left;
  position: absolute;
  left: 2%;
  top: 2%;
`;

const Links = styled.span`
  margin: 1.5em;
  color: #d6a156;
  font-weight: 600px;
  cursor: pointer;
  letter-spacing: 2px;
  border-bottom: 5px solid transparent;
`;

const ThreeLinks = styled.div`
  margin-top: .5%;
  margin-left: 12%;
`;

const MailBox = styled.img`
  float: left;
  position: absolute;
  right: 25%;
  top: 15%;
  opacity: 0.9;
`;

const Pipe1 = MailBox.extend`
  right: 28%;
  top: 2%;
  height: 40%;
`;

const SearchIcon = MailBox.extend`
  right: 20%;
  top: 13%;
`;

const Pipe2 = Pipe1.extend`
  right: 16%;
`;

class HeaderBar extends Component {
  render() {
    return (
      <NavBar>
          <Logo alt="Earn.com" src="https://static.earn.com/img/icons/wordmark-square-gold.svg" />
          <Pipe1 src="https://res.cloudinary.com/pancake/image/upload/v1510368906/Pipe.png" />
          <Pipe2 src="https://res.cloudinary.com/pancake/image/upload/v1510368906/Pipe.png" />
          <MailBox alt="Messages" src="https://static.earn.com/img/icons/menu_icons/icon-nav-inbox-gold.svg" />
          <SearchIcon alt="Search" src="https://static.earn.com/img/icons/menu_icons/icon-nav-search-gold.svg" />
          <ThreeLinks>
            <Links>Business</Links>
            <Links>Lists</Links>
            <Links>Community</Links>
          </ThreeLinks>
      </NavBar>
    )
  }
}

export default HeaderBar;