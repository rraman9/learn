import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import AddProfile from './AddProfile';
import {getProfiles} from "./profileApi";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: []
        }
        this.addUser = this.addUser.bind(this)

    }

    addUser(newProfile) {
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }

    componentDidMount() {
        getProfiles().then(
            profiles => this.setState({
                profiles: profiles
            })
        )
    }

    render() {
        let profiles = this.state.profiles.map(profile => {
            return (
            <Profile
                name={profile.name}
                age={profile.age}
                hobby={profile.hobby}/>

            )
        })

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <AddProfile addUser={this.addUser}/>
                <div>{profiles}</div>

            </div>
        );
    }
}

export default App;
