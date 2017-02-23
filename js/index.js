require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var Logo = require('./components/logo');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Logo />, document.getElementById('app'));
});