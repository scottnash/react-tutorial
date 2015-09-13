var Api = require('../utils/api'),
    Reflux = require('reflux'),
    Actions = require('../actions'),
    _ = require('lodash');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function(topicID){
        return Api.get('topics/'+topicID+"/")
            .then(function(json){
                this.images = _.reject(json.data,function(image){
                    return image.is_album
                });
                this.triggerChange();
            }.bind(this));
    },
    triggerChange: function(){
        this.trigger('change',this.images);
    }
});