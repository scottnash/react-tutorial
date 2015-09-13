var React = require('react'),
    Actions = require('../actions'),
    ImageStore = require('../stores/image-store'),
    Reflux = require('reflux');


module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore, 'onChange')
    ],
    getInitialState: function(){
        return {
            images: []
        }
    },
    componentWillMount: function(){
        Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps: function(nextProps){
        Actions.getImages(nextProps.params.id);
    },
    render: function(){
       return <div className="images-grid">
           {this.renderImages()}
           </div>
    },
    renderImages: function(){
        return this.state.images.map(function(image) {
            return <div>
                <img src={image.link} />
                </div>
        });
    },
    onChange: function(event, images){
        this.setState({images: images});
    }
});

