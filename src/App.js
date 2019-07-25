import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LabelBottomNavigation from './navigation.js'

import "./style.css"
import ButtonAppBar from './menubar.js'

import Home from './pages/home';

import { CssBaseline, Container } from '@material-ui/core';
import Biaya from './pages/pagebiaya'

import {Link,Route, Switch} from "react-router-dom";
import ButtonBases from './pages/tombol3.js'
import DataAPI from './pages/dataapi.js'
import Kartu from './pages/pagekartu';

class App extends React.Component {
  state = {
    page: "Home"
  }
  handelChangePage = (params) => {
    this.setState({
      page: params
    })
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <Container maxWidth="md">
       
        <Switch>
          <Route exact ={true} path="/" component={Home}/>
          <Route  path="/biaya" component={Biaya}/>
          <Route  path="/dataapi" component={DataAPI}/>
          <Route  path="/kartu" component={Kartu}/>
        </Switch>
        <ButtonBases/>
        <ButtonAppBar />
        <LabelBottomNavigation/>
        </Container>
          
      </div>
    );
  }


}
const styles = {
  head: {
    fontSize: "20px",
    color: "#42f5a1",
    marginBottom: "60px"
  },
  foot: {
    color: "blue",
    FontFamily: "Times New Roman"
  }
}
export default App;

