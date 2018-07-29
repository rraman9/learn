import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {signInUser} from "../../actions";
import {connect} from 'react-redux';

class SignIn extends Component {
    onSubmit(values) {
        const {email, password} = values;
        console.log('email=', email, 'values=', values);
        // need to do something to log the user in
        this.props.signInUser(email, password);
    }

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched  && error? 'has-danger':''}`;
        return (
            <div className="form-group" className={className}>
                <label>{field.label}</label>
                <input className="form-control" {...field.input} type={field.type} placeholder={field.placeholder}/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const {handleSubmit, fields: {email, password}} = this.props;
        return (

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="email" component={this.renderField} label="Email"/>
                <Field name="password" component={this.renderField} label="Password" type="password"/>
                {this.renderAlert()}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }

}

function mapStateToProps(state) {
    return {errorMessage: state.auth.error};
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(connect(mapStateToProps, {signInUser})(SignIn));