'use strict';


var sUtil = require('../lib/util');


/**
 * The main router object
 */
var router = sUtil.router();

/**
 * The main application object reported when this module is require()d
 */
var app;

module.exports = function(appObj) {

    app = appObj;

    return {
        path: '/',
        skip_domain: true,
        router: router
    };

};
