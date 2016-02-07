"use strict";

var React = require('react');
var SocialActions = require('../actions/socialActions');
var SocialStore = require('../stores/socialStore');

var MainContent = React.createClass({
	propTypes: {
		socials: React.PropTypes.array.isRequired
	},

	render: function() {
		return (
            <div className="pane image-edit-container">
            Hello Main Content
            </div>

		);
	}
});

module.exports = MainContent;