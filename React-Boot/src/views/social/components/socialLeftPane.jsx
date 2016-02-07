"use strict";

var React = require('react');

var LeftPane = React.createClass({
	propTypes: {
		socials: React.PropTypes.array.isRequired
	},

	render: function() {
		return (
            <div className="pane image-bank-container"> 
            Hello Left Pane
            </div>
		);
	}
});

module.exports = LeftPane;