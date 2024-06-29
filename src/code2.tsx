import React, { Component } from 'react';

class Counter extends Component<{}, { count: number }> { 
  state = {
    count: 0
  }; 

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 })); 
  }; 

  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
}

export default Counter;