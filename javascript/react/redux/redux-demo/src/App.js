import React, { Component } from 'react';
import './App.css';
import { incrementCount } from './actions';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.store,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange);
    }
    handleChange() {
        this.setState({
            count: this.props.store.getState(),
        });
    }
    handleClick() {
        /* this.setState({
            count: this.state.count + 1,
        }); */
        // const action = incrementCount();
        // TODO : dispatch to store
        this.props.store.dispatch(incrementCount());
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        );
    }
}

