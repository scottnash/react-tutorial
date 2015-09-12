var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData: [
        {
            title: 'Show Courses',
            number: 120,
            header: 'Learn React',
            description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
            imageUrl: 'http://formatjs.io/img/react.svg'
        },
        {
            title: 'Show Courses',
            number: 25,
            header: 'Learn Gulp',
            description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
            imageUrl: 'http://www.webdesignermag.co.uk/wp-content/uploads/2014/07/Get-started-with-Gulpjs.png'
        }
    ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.target'));