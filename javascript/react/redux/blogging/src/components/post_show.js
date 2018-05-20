import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from "../actions";
import {Link} from 'react-router-dom';
class PostShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        console.log('id is:' + id);
        this.props.fetchPost(id);
    }
    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const {post} = this.props;
        if (!post) {
            return <div>Loading...</div>;
        }
        console.log('post is:' + post);
        return (
            <div>
                <Link to="/" className="btn btn-">Back to index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps({posts}, ownProps) {
    console.log(posts);
    console.log('ownProps.match.params.id=' + ownProps.match.params.id);
    return { post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);
