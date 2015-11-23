var Greeting = React.createClass({
  render: function () {
    return (
        <ul className="collection">
          <li className="collection-item">{this.props.name}</li>
        </ul>
      );
  }
});
