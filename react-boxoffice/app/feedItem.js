import React from 'react';

module.exports = React.createClass({
    render: function () {
        return (
            <li>
                <a href={this.props.entry.link}>{this.props.entry.title}</a>
            </li>
        );
    }
});
