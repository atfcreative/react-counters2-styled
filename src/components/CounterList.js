import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
    render() { 
        let counters = [];
        for (let i = 0; i < this.props.data; i++) {
            counters.push(<Counter id={i} key={i} />)
        }
        return (
            <div className="counter-row">
                {counters}
            </div>
          );
    }
}
 

export default CounterList;