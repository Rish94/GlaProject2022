import React from "react";
import Navbar from '../Components/navbar';
import '../CSS/home.css';
import { BrowserRouter as Router, Route, Link, Switch }
  from "react-router-dom";
import ABOUT from '../Components/about'

import Sectionsecond from "../Components/Sectionsecond";
import Sectionfirst from "../Components/Sectionefirst";
import Footer from "../Components/footer";
import Home from "../Components/homepage";
import CONTACT from "../Components/contact";
import SERVICES from "../Components/services";

import Knowmore from "../Components/knowmore";

import Hatchback from "../Components/hatchback";
import Sedan from "../Components/sedan";
import Suv from "../Components/suv";
import Muv from "../Components/muv";
import Luxury from "../Components/luxury";
import Serviceform from "../Components/serviceform"



export default function home() {
  return (
    <>
      <Navbar />
       <Router>
        <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/about' component={ABOUT} />
          <Route exact path='/contact' component={CONTACT} />
          <Route exact path='/services' component={SERVICES} />

          <Route exact path='/hatchback' component={Hatchback} />
          <Route exact path='/sedan' component={Sedan} />
          <Route exact path='/suv' component={Suv} />
          <Route exact path='/muv' component={Muv} />
          <Route exact path='/luxury' component={Luxury} />
          <Route exact path='/knowmore' component={Knowmore} />
          <Route exact path='/serform' component={Serviceform} />

        </Switch>
      </Router>
      <Footer/>
    </>
  );
}