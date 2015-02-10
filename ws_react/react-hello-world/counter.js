var React = require('react');

var Counter = React.createClass({
  getInitialState: function(){
    return {
      count: 0
    }
  },
  increaseCount: function(evt){
    var newCount = this.state.count + 1;
    this.setState({
      count: newCount
    })
    this.props.onCount()
  },
  shouldComponentUpdate: function(nextProps, nextState){
    console.log(nextProps.purpose, nextState.count,
      this.props.propose, this.state.count);
  return ((nextState.count != this.state.count) ||
          (nextProps.purpose != this.props.purpose));
  },
  render: function(){
    console.log("Render ", this.props.purpose);
    return (<li>
    {this.props.purpose} has {this.state.count} clicks.
    <button onClick={this.increaseCount}>|+|</button>
    </li>)
  }
});

module.exports = Counter;