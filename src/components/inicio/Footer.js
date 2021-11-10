import React, { useState } from 'react';
import './Footer.css'
import img1 from '../../images/trabajo/1.png'
import img6 from '../../images/logoAguililla.png'
import img9 from '../../images/nuevo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
export default function Footer() {

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className='footer'>
        <div className="row">
          <div className="column">
            <div className='uno'>

              <div className='logo'>
                <img src={img9} className='img1' />
              </div>
              <p className='t1'> Ayuntamiento de Aguililla </p>
              <p className='t1'> 2021-2024</p>

            </div>
          </div>


          <div className="column">
            <div ><RoomIcon className='mapa' style={{ color: green[200] }} fontSize="large" /></div>

            <p className='dir'> Calle Morelos #7</p>
            <p className='dir'>Col. Centro, C.P. 60570 </p>
            <p className='dir'>Aguililla, Mich.</p>
            <div className="social-menu">
              <ul>
                <li><a href="https://www.facebook.com/Gobierno-de-Aguililla-105660715198677/" target="_blank">
                  <i className="fa"><FacebookIcon fontSize="large" /></i></a></li>
                <li><a href="https://twitter.com/gob_aguililla?s=20" target="_blank"><i className="fa"> <TwitterIcon fontSize="large" /></i></a></li>
                <li><a href="https://www.instagram.com/gobiernodeaguililla/" target="_blank"><i className="fa"><InstagramIcon fontSize="large" /></i></a></li>

              </ul>
            </div>
          </div>


          <div className="column">

            <div className='logo1'>
              <img src={img6} className='imglogo' />
            </div>

          </div>

          <div className="column">

            <p className='t1'> CORREO </p>
            <p className='t2'>presidencia2124aguililla@gmail.com</p>

            <br />

            <p className='t1'> TELEFONO </p>
            <p className='t2'>4531021727</p>

          </div>
        </div>
      </div>
    </>
  );
}
