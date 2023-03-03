import { Component } from 'react';
import axios from 'axios';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyle } from 'components/GlobalStyle';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      const BASE_URL = 'https://pixabay.com/api/';
      const API_KEY = '32970845-e4fc8afb31274d73d690834b7';
      axios
        .get(
          `${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(({ data }) => this.setState({ images: data.hits }));
    }
  }

  searchImages = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchImages } = this;
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={searchImages} />
        <ImageGallery items={images} />

        <GlobalStyle />
      </div>
    );
  }
}
