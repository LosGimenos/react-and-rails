var AllItems = React.createClass({
  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', response => {
      this.setState({ items: response }
      )}
    );
  },

  render() {
    return (
      <div>
        <h1>All items component</h1>
      </div>
    )
  }
});
