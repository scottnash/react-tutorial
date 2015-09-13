var Api = require('../utils/api'),
    Reflux = require('reflux'),
    Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function(topicID){
        return Api.get('topics/'+topicID+"/")
            .then(function(json){
                this.images = json.data;
                this.triggerChange();
            }.bind(this));
    },
    triggerChange: function(){
        this.trigger('change',this.images);
    }
});