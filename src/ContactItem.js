var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  render: function() {
    return (
      React.createElement('li', {className: 'Contact'},
        React.createElement('h2', {className: 'Contact-name'}, this.props.name),
        React.createElement('a', {href: `mailto:${this.props.email}`}, this.props.email),
        React.createElement('div', {}, this.props.description)        
      )
    );
  },
});
