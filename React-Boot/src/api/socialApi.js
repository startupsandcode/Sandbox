"use strict";

//This file is mocking a web API by hitting hard coded data.
var socials = require('./socialData').socials;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(social) {
	return social.firstName.toLowerCase() + '-' + social.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var socialApi = {
	getAllSocials: function() {
		return _clone(socials); 
	},

	getSocialById: function(id) {
		var social = _.find(socials, {id: id});
		return _clone(social);
	},
	
	saveSocial: function(social) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the social to the DB via AJAX call...');
		
		if (social.id) {
			var existingsocialIndex = _.indexOf(socials, _.find(socials, {id: social.id})); 
			socials.splice(existingsocialIndex, 1, social);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new socials in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			social.id = _generateId(social);
			socials.push(social);
		}

		return _clone(social);
	},

	deleteSocial: function(id) {
		console.log('Pretend this just deleted the social from the DB via an AJAX call...');
		_.remove(socials, { id: id});
	}
};

module.exports = socialApi;