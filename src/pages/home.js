import React from 'react'
import './Home.css'
// import Background from '../asset/latar.jpg'
import Biaya from './pagebiaya'
import Kartu from './pagekartu'

import ImageAvatars from './foto.js';

var bg = require('../asset/LATAR2.jpg')
class Home extends React.Component{
    render(){
        return(
            <div style={{backgroundImage: "url("+bg+")"}}>
            {/* <img src={require('../asset/latar.jpg')} /> */}
            <ImageAvatars/>
            {/* <SimpleBottomNavigation changePage={this.handelChangePage} />
          {
            // this.state.page === "Home" ? (<Home2 />) :
              this.state.page === "Biaya" ? (<Biaya />) :
              this.state.page === "Kartu" ? (<Kartu />) :
                    (<h1>Page Not Found</h1>)
          } */}
            </div>
        )
    }
}
export default Home