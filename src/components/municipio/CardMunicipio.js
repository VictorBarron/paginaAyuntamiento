import React from 'react';
import '../inicio/Cardresponsive.css'
import agricultura from '../../images/agricultura/agricultura.jpg'
import agricultura1 from '../../images/agricultura/agricultura1.jpg'
import agricultura2 from '../../images/agricultura/agricultura2.jpg'
import agricultura3 from '../../images/agricultura/agricultura3.jpg'
import agricultura4 from '../../images/agricultura/agricultura4.jpg'
import agricultura5 from '../../images/agricultura/agricultura5.jpg'



export default function CardMunicipio() {
    return (
        <>
            <div className="row">
                <div className="column">
                    <img src={agricultura} />
                    <img src={agricultura1} />
                    <img src={agricultura5} />
                   
                </div>

                <div className="column">
                    <img src={agricultura2} />
                    <img src={agricultura3} />
                    
                  

                </div>

                <div className="column">
                    <img src={agricultura5} />
                    <img src={agricultura} />
                    <img src={agricultura4} />
                  
                </div>

                <div className="column">
                    
                    <img src={agricultura} />
                    <img src={agricultura3} />
                    <img src={agricultura5} />
                   

                </div>

            </div>
        </>
    );
}
