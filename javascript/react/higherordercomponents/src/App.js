import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let HOCGen = (Component, state) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = state
    }
    render() {
        return <Component{...this.props} {...this.state}/>
    }
    componentDidMount() {
        setInterval(() => this.setState({
            count: this.state.count+1
        }), 500)
    }
}

class Comp1 extends Component {
    render() {
        return (
            <div className="App">
                <p>Comp1</p>
                {this.props.count}
            </div>
        )
    }

}

class Comp2 extends Component {
    render() {
        return (
            <div className="App">
                <p>Comp2</p>
                {this.props.count}
            </div>
        )
    }

}

let WrappedComp1 = HOCGen(Comp1, {count: 0})
let WrappedComp2 = HOCGen(Comp2, {count: 500})

class App extends Component {
  render() {
    return (
      <div className="App">
          <WrappedComp1/>
          <WrappedComp2/>
      </div>
    );
  }
}

export default App;
