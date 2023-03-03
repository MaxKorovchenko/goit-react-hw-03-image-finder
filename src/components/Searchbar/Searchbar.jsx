import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit(searchQuery);
    this.reset();
  };

  reset() {
    this.setState({ searchQuery: '' });
  }

  render() {
    const { searchQuery } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <header>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={handleChange}
            value={searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
