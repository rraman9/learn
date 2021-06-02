import React from 'react';

function Home(props) {
    return (
        <div class="jumbotron">
            <h1 class="display-3">Workshops App</h1>
            <p class="lead">Jumbo helper text</p>
            <hr class="my-2"/>
            <p>More info</p>
            <p class="lead">
                Welcome to workshops app. Here you'll find information about our upcoming workshops
                {/*<a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>*/}
            </p>
        </div>
    );
}

export default Home;