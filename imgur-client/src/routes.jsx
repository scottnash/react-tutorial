var React = require('react'),
    ReactRouter = require('react-router'),
    HashHistory = require('react-router/lib/HashHistory'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    Main = require('./components/main');

module.exports = (
    <Router history={new HashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>
);