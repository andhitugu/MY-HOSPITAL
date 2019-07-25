import React from 'react'
import Biaya from './pagebiaya'
import Kartu from './pagekartu'
import SimpleBottomNavigation from './tombol2.js';

export default class  Home2 extends React.Component {
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

      
      <SimpleBottomNavigation changePage={this.handelChangePage} />
          {
           
              this.state.page === "Biaya" ? (<Biaya />) :
              this.state.page === "Kartu" ? (<Kartu />) :
                    (<h1>Page Not Found</h1>)
          }
      </div>
      
    );
  }
}

