import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };
        
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    increaseCount() {
        let count = this.state.count + 1;

        this.setState({
        count 
        });
    }

    decreaseCount() {
        if(this.state.count > 0) {
        let count = this.state.count - 1;

        this.setState({
            count
        });
      }
    }

    render() { 
        return (
            <div className="counter">
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.decreaseCount} type="button" class="btn btn-sm btn-outline-secondary m-1">Decrement</button>
                <button onClick={this.increaseCount} type="button" class="btn btn-sm btn-outline-primary m-1" >Increment</button>
            </div>
        );
    }
}

export default Counter;

//TIP: you can render an array of elements like this:
// class List extends Component {
//     render() { 
//         let list = [<Item/>,<Item/>,<Item/>];
//         return (
//             <div className="list">
//                 {list}
//             </div>
//           );
//     }
// }