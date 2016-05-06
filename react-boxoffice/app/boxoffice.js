require("./scss/main.scss");
import RSS from "../helpers/rss.js";
import React from 'react';
import ReactDOM from 'react-dom';
import FeedItem from './feedItem.js';


let BoxOfficeFeed = React.createClass({
    getInitialState: function () {
        this.loadFeedFromServer();
        return { feed: { entries: [] } };
    },
    loadFeedFromServer: function () {
        RSS.getFeed("http://www.fandango.com/rss/top10boxoffice.rss", function (err, feed) {
            if(err) return alert('error loading feed');
            this.setState({ feed: feed });
        }.bind(this));
    },
    render: function () {
        return (
            <ul>
                {this.state.feed.entries.map(function (entry, i) {
                    return <FeedItem key={i} entry={entry} />
                })}
            </ul>
        );
    }
});

ReactDOM.render(<BoxOfficeFeed />, document.getElementById('boxoffice'));