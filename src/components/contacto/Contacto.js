import React from 'react';
import './Contacto.css'
import logo from '../../images/nuevo.png'

export default function Contacto() {
    return (
        <>
            <div className="containerC">
                <div >
             
                </div>
                <div className="rowC">
                    <div className="columnC">
                        <img src={logo}  className='imgC' /> 
                    </div>
                    <div className="columnC">
                        <form action="/action_page.php">
                            <label for="fname">Nombre Completo</label>
                            <input type="text" id="fname" name="firstname" placeholder="Tu nombre.." />
                            <label for="lname">Numero telefonico</label>
                            <input type="text" id="lname" name="lastname" placeholder="Numero de telefono.." />
                            <label for="country">Email</label>
                            <input type="text" id="lname" name="lastname" placeholder="Correo electrónico.." />
                            <label for="subject">Mensaje</label>
                            <textarea id="subject" name="subject" placeholder="Escribe el mensaje.."></textarea>
                            <input type="submit" value="Submit" name='enviar'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
