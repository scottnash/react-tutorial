var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
      return {
            text: ''
        }
    },
    render: function(){
        return <div className="input-group">
                    <input
                        className="form-control"
                        onChange={this.handleInputChange}
                        type="text"
                        value={this.state.text}
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-default"
                            onClick={this.handleClick}
                            type="button">
                            Add
                        </button>
                    </span>
                </div>
    },
    handleClick: function(){
        this.props.itemsStore.push({
            text: this.state.text,
            done: false
        });
        this.setState({text: ''});
    },
    handleInputChange: function(event){
        this.setState({text: event.target.value});
    }
});