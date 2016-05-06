import React from 'react';

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <a href={this.props.entry.link}>{this.props.entry.title}</a>
            </div>
        );
    }
});
