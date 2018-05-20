import React, {Component} from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.name} is {this.props.age} years old</p>
                <p>Hobby is {this.props.hobby}</p>
            </div>
        )
    }
}

