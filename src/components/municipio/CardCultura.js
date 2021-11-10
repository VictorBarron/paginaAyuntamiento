import React from 'react';
import '../inicio/Cardresponsive.css'
import iglesia from '../../images/iglesia/iglesia.jpg'
import iglesia1 from '../../images/iglesia/iglesia1.jpg'
import iglesia2 from '../../images/iglesia/iglesia2.jpg'
import iglesia3 from '../../images/iglesia/iglesia3.jpg'
import iglesia4 from '../../images/iglesia/iglesia4.jpg'
import iglesia5 from '../../images/iglesia/iglesia5.jpg'
import iglesia6 from '../../images/iglesia/iglesia6.jpg'




export default function CardCultura() {
    return (
        <>
            <div className="row">
                <div className="column">
                    <img src={iglesia3} />
                    <img src={iglesia1} />
                    <img src={iglesia2} />
                   
                
                   
                </div>

                <div className="column">
                
                    <img src={iglesia1} />
                    <img src={iglesia2} />
                    <img src={iglesia3} />
                   

                </div>

                <div className="column">
              
                   
                    <img src={iglesia3} />
                    <img src={iglesia4} />
                    <img src={iglesia5} />
                   
                </div>

                <div className="column">
               
                    <img src={iglesia4} />
                    <img src={iglesia5} />
                    <img src={iglesia6} />
                    

                </div>

            </div>
        </>
    );
}
