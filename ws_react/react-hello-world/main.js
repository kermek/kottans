var React = require('react');
var Counter = require('./counter');

var CounterList = React.createClass({
  getInitialState: function(){
    return {
      items: ['Male', 'Female', 'Unknown']
    }
  },
  increaseTotalCount: function(){
    this.setState({
      total: (this.state.total || 0) + 1
    })
  },
  renderCounter: function(purpose){
    return <Counter onCount={this.increaseTotalCount} purpose={purpose} />
  },
  render: function(){
    return <ul>
      {this.state.items.map(this.renderCounter)}
      <li>Total is {this.state.total || "None yet"}</li>
    </ul>
  }
});

React.render(<CounterList />, document.getElementById('myApp'));
module.exports = CounterList;