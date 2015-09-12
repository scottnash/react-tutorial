var React = require('react');
var Dropdown = require('./dropdown');

var options = {
    title: 'Choose a dessert',
    items: [
        'Apple Pie',
        'Chocolate Cake',
        'Pudding Pops'
    ]
};

var element = React.createElement(Dropdown, options);

React.render(element, document.querySelector('.target'));