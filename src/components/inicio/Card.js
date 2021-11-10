import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/nuevo.png'
import img from '../../images/1.jpg'
import img1 from '../../images/2.jpeg'
import img2 from '../../images/3.jpg'
import './Card.css'




export default function Card() {

    return (
        <>



            <div className='contenedor'>
                <div className='Card'>
                    <div className="container">
                        <img src={img} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">ENTREGA DE MATERIAL PARA DIFERENTES INSTITUCIONES EDUCATIVAS</div>
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className="container">
                        <img src={img1} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">ADQUISICION DE UN CONCENTRADOR DE OXIGENO PARA EL MUNICIPIO</div>
                         {/*    <img src={logo} className='logo'/> */}
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className="container">
                        <img src={img2} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">CONTINUAN LAS ACTIVIDADES DE SANITIZACIÓN </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
