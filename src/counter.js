import React from 'react' ;
class Counter extends React.Component {
    state = {
      angka: 0
    };
   
    plus = () => {
      this.setState({
        angka: this.state.angka + 1
      });
    };
   
    minus = () => {
      this.setState({
        angka: this.state.angka - 1
      });
    };
    render() {
      return (
        <div>
          <h1>{this.state.angka}</h1>
          <button onClick={this.plus}>+</button>
          <button onClick={this.minus}>-</button>
        </div>
      );
    }
   }

   export default Counter;