import React from 'react';
import Navbar from './components/navbar/Navbar';
 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/inicio/Inicio';
import Municipio from './components/pages/Municipio';
import ContactUs from './components/pages/ContactUs';
import Transparencia from './components/pages/Transparencia';
import Comunicacion from './components/pages/Comunicacion';
import Conac from './components/pages/Conac';



function App() {
  return (
    <Router>
      <Navbar />  
      <Switch>
        <Route path='/' exact component={ Inicio } />
        <Route path='/municipio' component={Municipio} />
        <Route path='/comunicacion' component={Comunicacion} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/transparencia' component={Transparencia} />
        <Route path='/conac' component={Transparencia} />
      </Switch>
    </Router>
  );
}

export default App;
