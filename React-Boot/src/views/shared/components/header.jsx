"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav>
          <div>
              <Link to="app">
                <img className="logo" src="images/code-monkey-153x153.png" />
              </Link>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
