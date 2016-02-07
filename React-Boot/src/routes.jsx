"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./app.jsx')}>
    <DefaultRoute handler={require('./views/social/components/socialPage.jsx')} />
    <Route name="social" handler={require('./views/social/components/socialPage.jsx')} />
    <NotFoundRoute handler={require('./views/shared/components/notFoundPage.jsx')} />
  </Route>
);

module.exports = routes;