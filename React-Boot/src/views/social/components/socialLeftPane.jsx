"use strict";

var React = require('react');

var LeftPane = React.createClass({
	propTypes: {
		socials: React.PropTypes.array.isRequired
	},

	getInitialState: function(){
		return {
			'className' : 'pane side-panel show',
			'panelOpen' : true
		}
	},

	togglePane: function(){
		if (this.state.panelOpen){
			this.setState({'panelOpen' : false,'className':'hide'});
		}else{
			this.setState({'panelOpen' : true,'className':'show'});
		}
	},

	render: function() {
		return (
            <div
		 className={this.state.className + ' pane side-panel'}
		 onClick={this.togglePane}> 
            Hello Left Pane
            </div>
		);
	}
});

module.exports = LeftPane;