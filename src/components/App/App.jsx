import { Component } from 'react';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyle } from 'components/GlobalStyle';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

import { fetchImages } from 'services/fetchImages';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    totalHits: null,
    showModal: false,
    url: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchImages(searchQuery, page)
        .then(data =>
          this.setState(({ images }) => ({
            images: [...images, ...data.hits],
            totalHits: data.totalHits,
          }))
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  searchImages = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = url => {
    this.setState({
      showModal: true,
      url,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      url: '',
    });
  };

  render() {
    const { searchImages, loadMore, openModal, closeModal } = this;
    const { searchQuery, images, isLoading, error, totalHits, showModal, url } =
      this.state;

    return (
      <div>
        <Searchbar search={searchQuery} onSubmit={searchImages} />

        {error && <p>{error}</p>}
        <ImageGallery items={images} openModal={openModal} />
        {isLoading && <Loader />}
        {Boolean(images.length) && (
          <Button onClick={loadMore} total={totalHits} items={images} />
        )}

        {showModal && (
          <Modal close={closeModal}>
            <img src={url} alt="" />
          </Modal>
        )}

        <GlobalStyle />
      </div>
    );
  }
}
