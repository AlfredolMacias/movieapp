import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { DetalleScreen } from './detelle/DetalleScreen';
import { Inicio } from './inicio/Inicio';
import { InicioS } from './inicio/InicioS';
import { Footer } from './ui/Footer';
import { NavBar } from './ui/NavBar';


export const MovieApp = () => {
    return (
        <Router>
            <div>
                <NavBar/>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/movie" component={ Inicio }/>
                    <Route exact path="/series" component={InicioS}/>
                    <Route exact path="/movie/:movieId" component={DetalleScreen}/>
                    <Route exact path="/tv/:movieId" component={DetalleScreen} />
                    <Redirect to="/movie"/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )   
}
