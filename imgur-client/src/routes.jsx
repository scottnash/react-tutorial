var React = require('react'),
    ReactRouter = require('react-router'),
    HashHistory = require('react-router/lib/HashHistory'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    Main = require('./components/main'),
    Topic = require('./components/topic');

module.exports = (
    <Router history={new HashHistory}>
        <Route path="/" component={Main}>
            <Route path="topics/:id" component={Topic} />
        </Route>
    </Router>
);