import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class AddProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            hobby: '',
            age: ''

        }
        this.handleName=this.handleName.bind(this);;
        this.handleHobby=this.handleHobby.bind(this)
        this.handleAge=this.handleAge.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleHobby(e) {
        this.setState({
            hobby: e.target.value
        })
    }
    handleAge(e) {
        this.setState({
            age: e.target.value
        })
    }
    handleClick(e) {
        let newProfile = {
            name: this.state.name,
            age: this.state.age,
            hobby: this.state.hobby
        }
        this.props.addUser(newProfile)
        ReactDOM.findDOMNode(this.refs.inputbox).focus()
    }

    render() {
        return (
        <div>
            <p>Add a new profile</p>
            <input ref={'inputbox'} onChange={this.handleName} value={this.state.name}/>
            <input onChange={this.handleHobby} value={this.state.hobby}/>
            <input onChange={this.handleAge} value={this.state.age}/>
            <button onClick={this.handleClick}>Add new profile</button>
        </div>
        )
    }
}