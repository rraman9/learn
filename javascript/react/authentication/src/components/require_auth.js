import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.history.push('/');
            }
        }
        render() {
            console.log('parent component: props are:', this.props);
            console.log('context is', this.context);
            return <ComposedComponent {...this.props} />
        }
    }
    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated}
    }
    return connect(mapStateToProps)(Authentication);
}

