import './Navbar.scss'
import Logo from '../../assets/hero.png';
import { useState } from 'react';
import {faBars} from "react-icons/fa";

export const Navbar = () => {
    const {ShowNav, setShowNav} = useState(false);


  return  <nav className="navbar">
    <Wrapper clasName={'navbar__container'}>
        <a href="" className="navbar__logo">
            <img src={Logo} alt="logo" />
        </a>
    </Wrapper>
  </nav>
};

export default Navbar;