import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logoBlanco from '../../images/lo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
      <div className>

        <nav className='navbars'>

          <img src={logoBlanco} className='navbar-image'></img>

          <div className='menu-icons' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
          <Link to='/' className='navbar-logos' onClick={closeMobileMenu}>
            <p className='titulo'> AYUNTAMIENTO DE</p>
            <p className='titulo'>  AGUILILLA</p>
            <p className='titulo'> 2021-2024</p>
          </Link>


          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links inicio' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/municipio' className='nav-links' onClick={closeMobileMenu}>
                Municipio
              </Link>
            </li>
            <li className='nav-item' >
              <Link
                to='/comunicacion'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Comunicación Social
              </Link>

            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buzon ciudadano
              </Link>
              
            </li>


            <li className='nav-item'>
              <Link to='/transparencia' className='nav-links'
                onClick={closeMobileMenu} >
                Tansparencia
              </Link>
              <ul>
                <li ><Link to='/transparencia'>Sindicato</Link></li>
                <li ><Link to='/conac'  onClick={closeMobileMenu}>CONAC</Link></li>
                <li><Link to='/transparencia'>LDF</Link></li>
                <li><Link to='/transparencia'>Recursos</Link></li>
                <li><Link to='/transparencia'>Convocatoria</Link></li>
              </ul>
            </li>

           

          </ul>
        </nav>

      </div>

    </>
  );
}

export default Navbar;
