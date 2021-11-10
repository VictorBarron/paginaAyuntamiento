import React from 'react';
import './Cardresponsive.css'
import img1 from '../../images/trabajo/1.png'

import img6 from '../../images/trabajo/6.jpg'

import img9 from '../../images/trabajo/9.jpg'


export default function CardResponsive() {
    return (
        <>
            <div className="row">
                <div className="column">

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={img1} className='img' />
                            </div>
                            <div class="flip-card-back">
                                <h4>Carretera Aguililla - Apatzingan</h4>
                                <br/>
                                <br/>
                                
                                <p>Trabajos de limpieza de carreteras del municipio</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={img9} className='img' />
                            </div>
                            <div class="flip-card-back">
                                <h4>Ejido El Aguaje</h4>
                                <br/>
                                <br/>
                                <p>Entrega de fertilizantes a ciudadanos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                           <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={img6} className='img' />
                            </div>
                            <div class="flip-card-back">
                                <h4>Comunidad EL Limon</h4>
                                <br/>
                                <br/>
                                <p>Entrega de equipo médico en la comunidad de El Limon</p>
                            </div>
                        </div>
                    </div>
                </div>

               
               
               
            </div>
        </>
    );
}
