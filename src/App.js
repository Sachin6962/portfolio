import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Menu from './Components/Menu/Menu';
import Home from './Pages/Home';
import Werk from './Pages/Werk';
import OverMij from './Pages/OverMij';
import Contact from './Pages/Contact';

import LiefdeApp from './Pages/Projecten/Liefde-App/LiefdeApp'
import PianoApp from './Pages/Projecten/Piano-App/PianoApp'
import SimonSpel from './Pages/Projecten/Simon-Spel/SimonSpel'


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={Werk} path='/Werk'/>
        <Route component={OverMij} path='/OverMij'/>
        <Route component={Contact} path='/Contact'/>

        <Route component={LiefdeApp} path='/LiefdeApp'/>
        <Route component={PianoApp} path='/PianoApp'/>
        <Route component={SimonSpel} path='/SimonSpel'/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;