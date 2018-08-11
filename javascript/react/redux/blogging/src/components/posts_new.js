import React, {Component} from 'react';
import {Field, reduxreduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from "../actions";
import {connect} from 'react-redux';

class PostsNew extends Component {
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

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="title" component={this.renderField} label="Title "/>
                    <Field name="categories" component={this.renderField} label="Categories"/>
                    <Field name="content" component={this.renderField} label="Post Content"/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter the categories!";
    }
    if (!values.content) {
        errors.content = "Enter content!";
    }
    // if error is empty, then redux assumes the form is valid, else it assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null,{createPost})(PostsNew));