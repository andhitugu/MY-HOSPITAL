import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter from './counter.js'
// import Header from './header.js'
import LabelBottomNavigation from './navigation.js'

import "./style.css"
import ButtonAppBar from './menubar.js'
// import Home2 from './pages/home2';
import Home from './pages/home';
// import IconLabelButtons from './pages/tombol.js';
import SimpleBottomNavigation from './pages/tombol2.js';
// import SimpleBottomNavigation2 from './pages/tombol3.js';
import { CssBaseline, Container } from '@material-ui/core';
import Biaya from './pages/pagebiaya'
// import Kartu from './pages/pagekartu'
// import { homedir } from 'os';
// import { homedir } from 'os';
import {Link,Route, Switch} from "react-router-dom";
import ButtonBases from './pages/tombol3.js'


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
        <ButtonAppBar />
        {/* <SimpleBottomNavigation/> */}
       
        <Switch>
          <Route exact ={true} path="/" component={Home}/>
          <Route  path="/biaya" component={Biaya}/>
          {/* <Route  path="/store-locator" component={About}/> */}

        </Switch>
        <ButtonBases/>
        <LabelBottomNavigation/>


          {/* <Home2/> */}
          
          {/* <SimpleBottomNavigation changePage={this.handelChangePage} />
          {
            this.state.page === "Home" ? (<Home2 />) :
              this.state.page === "Biaya" ? (<Biaya />) :
              this.state.page === "Kartu" ? (<Kartu />) :
                    (<h1>Page Not Found</h1>)
          } */}
        </Container>
            

        {/* <IconLabelButtons /> */}

        {/* <SimpleBottomNavigation/> */}

        {/* <Header /> */}
        {/* <h1 style={{fontSize:'70px' ,color:"#42f5a1" }}> hai </h1> */}
        {/* <h2 style={styles.head}>hello</h2> */}
        {/* <h3 class = "kepala" >hai hai</h3> */}
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

