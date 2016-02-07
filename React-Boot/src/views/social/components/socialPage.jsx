"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var SocialStore = require('../stores/socialStore');
var SocialActions = require('../actions/socialActions');
var Toolbar = require('./socialToolbar.jsx');
var MainContent = require('./socialMainContent.jsx');
var LeftPane = require('./socialLeftPane.jsx');

var SocialPage = React.createClass({
	getInitialState: function() {
		return {
			socials: []
		};
	},

	componentWillMount: function() {
		this.socialStoreListen = SocialStore.listen(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		this.socialStoreListen();
	},

	_onChange: function() {
		//this.setState({ socials: SocialStore.getAllSocials() });
	},

	render: function() {
		return (
			<div className="page-container">
				<Toolbar socials={this.state.socials} />
                <LeftPane socials={this.state.socials} />
                <MainContent socials={this.state.socials} />
			</div>
		);
	}
});

module.exports = SocialPage;