import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import {signupUser} from "../../actions";
import {connect} from 'react-redux';
class Signup extends Component {

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched  && error? 'has-danger':''}`;
        return (
            <div className="form-group" className={className}>
                <label>{field.label}</label>
                <input className="form-control" {...field.input} type="text" placeholder={field.placeholder}/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    handleFormSubmit(formProps) {
        // Call action creator to sign up the user
        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            console.log('error message is:', this.props.errorMessage);
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong><p>{this.props.errorMessage}</p>
                </div>
            )
        }
    }

    render() {
        const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
        return (
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field name="email" component={this.renderField} label="Email "/>
              <Field name="password" component={this.renderField} label="Password"/>
              <Field name="passwordConfirm" component={this.renderField} label="Confirm password" type="password"/>
              {this.renderAlert()}
              <button action="submit" className="btn btn-primary">Sign up</button>
          </form>
        );
    }
}

function validate(formProps) {
    const errors = {};
    console.log('form props are:', formProps);

    if (!formProps.email) {
        errors.email = "Please enter an email address";
    }
    if (!formProps.password) {
        errors.password = "Please enter a password";
    }
    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = "Please enter a confirmation password";
    }
    if (formProps.password !== formProps.passwordConfirm) {
        console.log('password mismatch:password=', formProps.password, ', passwordConfirm=', formProps.passwordConfirm);
        errors.password = 'Passwords must match!';
    }
    return errors;

}

function mapStateToProps(state) {
    return {errorMessage: state.auth.error};
}

export default reduxForm({
    validate,
    form: 'PostsNewForm',
    fields: ['email', 'password', 'passwordConfirm']
})(
    connect(mapStateToProps,{signupUser})(Signup));