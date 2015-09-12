var React = require('react'),
    Firebase = require('firebase'),
    rootUrl = "https://glowing-heat-2866.firebaseio.com/";

module.exports = React.createClass({
    getInitialState: function(){
        return {
            text: this.props.item.text,
            done: this.props.item.done,
            textChanged: false
        }
    },
    componentWillMount: function(){
        this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
    },
   render: function(){
       return <div className="input-group">
                <span className="input-group-addon">
                    <input
                        onChange={this.handleDoneChange}
                        type="checkbox"
                        checked={this.state.done} />
                </span>
                <input type="text"
                       className="form-control"
                       onChange={this.handleTextChange}
                       value={this.state.text}
                       disabled={this.state.done}
                />
                <span className="input-group-btn">
                    {this.changesButton()}
                    <button
                        className="btn btn-default"
                        onClick={this.handleDeleteClick}
                    >
                        Delete
                    </button>
                </span>
            </div>
   },
    changesButton: function(){
        if(!this.state.textChanged){
            return null;
        } else {
            return [
                <button
                    onClick={this.handleSaveClick}
                    className="btn btn-default">
                    Save
                </button>,
                <button
                    onClick={this.handleUndoClick}
                    className="btn btn-default">
                    Undo
                </button>
            ]
        }
    },
    handleDoneChange: function(event){
        var update = { done: event.target.checked };
        this.setState( update );
        this.fb.update( update );
    },
    handleDeleteClick: function(event){
        this.fb.remove();
    },
    handleTextChange: function(event){
        this.setState({
            text: event.target.value,
            textChanged: true
        })
    },
    handleUndoClick: function(event){
        this.setState({
            text: this.props.item.text,
            textChanged: false
        })
    },
    handleSaveClick: function(event){
        this.fb.update( { text: this.state.text } );
        this.setState( { textChanged: false } );
    }
});