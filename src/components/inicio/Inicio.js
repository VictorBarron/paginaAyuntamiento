import React from 'react';
import Slider from './slider/Sliders'
import './inicio.css'
import foto1 from './slider/images/team1.jpeg';
import Card from './Card'
import CardResponsive from './CardResponsive';
import Footer from './Footer';
import Mapa from './Mapa'
import Eventos from './Eventos'


export default function Inicio() {

  return (
    <>

      <div >

        <div className="flex-container">
          <div className="flex-item-left">
            {/*  <img src={foto} className='logo'/> */}
            <div className='card'>

              <img src={foto1} className='fotoPresidente'></img>
              <div className="container">
              </div>
            </div>

            <p className='titulos'>Cesar Arturo Valencia Caballero</p>
            <p className='titulos1'>PRESIDENTE MUNICIPAL</p>

          </div>
          <div className="flex-item-right"> <Slider className='slider'></Slider>

          </div>
        </div>

        <hr className='linea' />
        <div className='container-card'>
          <p className='apartado'>Noticias </p>
          <Card />
          <br />
          <br />
          <br />

        </div>
        {/* <hr className='linea' /> */}

        <div className="parallax1">

        </div>

        <div className='trabajo'>
          <br />
          <p className='apartado'> Trabajo Social</p>

          <CardResponsive />
          <br />
          <br />

        </div>


        {/* <div class="parallax"></div> */}



        <p className='apartado'> Eventos</p>


        <Eventos />





   {/*      <p className='apartado'> Obras publicas</p> */}


        <div>
          <Mapa />
        </div>

        <Footer />

      </div>






    </>
  );
}


