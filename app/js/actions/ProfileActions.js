'use strict';

var Reflux = require('reflux');

module.exports = Reflux.createActions([
    'fetchProfile',
    'fetchSelf',
    'fetchLibrary',
    'fetchOwnedListings',
    'addToLibrary',
    'removeFromLibrary',
    'updateLaunchPreference'
]);
