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

// var React = require('react');
// var ReactDOM = require('react-dom');

// var Person = function() {
//     var name = 'Derek Zoolander';
//     var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
//     var job = 'Male model';
//     return (
//         <div className="person">
//             <div className="person-name">{name}</div>
//             <img className="person-img" src={imageUrl} />
//             <div className="person-job">
//                 {job}
//             </div>
//         </div>
//     );
// };

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Person />, document.getElementById('app'));
// });