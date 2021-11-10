import React from 'react';
import Footer from '../inicio/Footer'
import CardMunicipio from '../municipio/CardMunicipio'
import aguililla1 from '../../images/aguililla1.jpg'
import aguililla2 from '../../images/aguililla2.jpg'
import '../municipio/Municipio.css'
import CardCultura from '../municipio/CardCultura';

export default function Municipio() {
  return (
    <>
      <div className="parallaxAguililla"></div>
      <div>

        <p className='apartado'> Historia</p>
        <div className="flex-container2">
          <div className="flex-item-left2">
            <p className='historia'>El pueblo de Aguililla, es relativamente moderno.
              Se formó después de consumada la Independencia de México, fundándose
              el primer tercio del siglo XIX a raíz de la emigración de diversas familias
              procedentes de Zamora y Cotija principalmente, las cuales se establecieron
              en una hacienda propiedad de Doña María Josefa del Peral, con el objeto de
              impulsar el desarrollo de la agricultura y la ganadería. El pueblo en un
              principio, sólo fue una congregación de escaso vecindaria, aumentando la
              población con el correr de los años, al grado de que para el año de 1831,
              la Ley Territorial del 10 de diciembre lo considera como una tenencia del
              municipio de Apatzingán. En 1854, fue atacado e incendiado por el
              guerrillero republicano Pascual Rodríguez Pinzón. Durante la gubernatura
              del Gral.</p>
          </div>
          <div className="flex-item-right2">
            <img src={aguililla1} className='imga' />
          </div>
        </div>
      </div>
      <div className='personajes'>
        <p className='apartado'> Personajes Ilustres</p>
        <div className="flex-container2">
          <div className="flex-item-left2">
            <img src={aguililla2} className='imga1' />
          </div>
          <div className="flex-item-right2">
            <p className='apartado1'> Abel Alcaraz Pallares (1906). </p>
            <p className='apartado1'> Santiago Tapia (1820-1866). </p>
            <p className='apartado1'> Rafael Sánchez Tapia. (1887), general. </p>
          </div>
        </div>


      </div>
      <p className='apartado'> Agricultura </p>
      <div className='municipio'>
        <CardMunicipio />
      </div>
      <p className='apartado'> Lugares concurridos</p>

      <div className='cultura'>
        <CardCultura />

      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
