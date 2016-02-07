"use strict";

var Reflux = require('reflux');
var SocialActions = require('../actions/socialActions');
var SocialApi = require('../../../api/socialApi');
var _ = require('lodash');

var _socials = [];

var SocialStore = Reflux.createStore({

    listenables: SocialActions,

    // Initial setup
    init: function() {
    },
    
});

module.exports = SocialStore;