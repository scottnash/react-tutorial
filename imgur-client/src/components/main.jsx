var React = require('react'),
    Header = require('./header'),
    TopicList = require('./topic-list');

module.exports = React.createClass({
   render: function(){
       return <div>
               <Header />
               {this.content()}
           </div>
   },
    content: function(){
        if(this.props.children){
            return this.props.children
        } else {
            return <TopicList />
        }
    }
});