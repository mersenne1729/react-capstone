require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var Logo = require('../js/components/logo');
var Banner = require('../js/components/banner');
var Intro = require('../js/components/intro');
var Cards = require('../js/components/cards');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<div>   
        <Logo />
        <Banner />
        <Intro />
        <Cards />
        </div>, document.getElementById('app'));
});

