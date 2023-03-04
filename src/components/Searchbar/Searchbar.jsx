import { Component } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

import { Button, Form, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    const { searchQuery } = this.state;
    const { onSubmit, search } = this.props;

    e.preventDefault();
    if (searchQuery === search) return;

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
      <>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <FcSearch />
          </Button>

          <Input
            onChange={handleChange}
            value={searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            aria-label="search"
            required
          />
        </Form>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
