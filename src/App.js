import React, { Component } from 'react';
import Header from './components/Header';
import CounterList from './components/CounterList'


class App extends Component {
  constructor() {
    super();

    this.state = {
      counters: 6
    }
    this.increaseCounters = this.increaseCounters.bind(this);
    this.decreaseCounters = this.decreaseCounters.bind(this);
  }

  increaseCounters() {
    let counters = this.state.counters + 1;

    this.setState({
    counters
    });
}

  decreaseCounters() {
    if(this.state.counters > 0) {
      let counters = this.state.counters - 1;
      this.setState({
        counters
    });
  }
}
  
  render() {
    return (
      <div>
        <Header increase={this.increaseCounters} decrease={this.decreaseCounters} />
        <h4>{this.state.counters}</h4>
        <CounterList data={this.state.counters} />
      </div>
    );
  }
}

export default App;
