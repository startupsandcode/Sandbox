"use strict";

var React = require('react');
var SocialActions = require('../actions/socialActions');

var Toolbar = React.createClass({
	propTypes: {
		socials: React.PropTypes.array.isRequired
	},

	render: function() {
		return (
			<div className="pane toolbar">
                Hello Toolbar
			</div>
		);
	}
});

module.exports = Toolbar;