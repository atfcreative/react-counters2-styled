import React, { Component } from 'react';
import Logo from '../react.png';

class Header extends Component {
    render() { 
        return ( 
        <header>
            <img src={Logo} alt="" /><br/>
            <small>Add or Delete Counters</small><br/>
            <button onClick={this.props.decrease} type="button" className="btn btn-outline-primary m-1"><strong>--</strong></button>
            <button onClick={this.props.increase} type="button" className="btn btn-outline-primary m-1"><strong>+</strong></button>
        </header>
        );
    }
}

export default Header;