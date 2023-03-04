import { Component } from 'react';
import { animateScroll } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyle } from 'services/GlobalStyle';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

import { fetchImages } from 'services/fetchImages';

import { Image } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    error: '',
    page: 1,
    totalHits: null,
    showModal: false,
    url: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ isLoading: true });

      try {
        const data = await fetchImages(searchQuery, page);
        this.setState(({ images }) => ({
          images: [...images, ...data.hits],
          totalHits: data.totalHits,
        }));

        if (!data.total) {
          toast.info('No results were found for your search!');
        }
      } catch (error) {
        this.setState({ error: error.message });
        toast.error(`Whoops, something went wrong ${error.message}`);
      } finally {
        this.setState({ isLoading: false });
      }
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

    animateScroll.scrollToBottom();
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
    const { searchQuery, images, isLoading, totalHits, showModal, url } =
      this.state;

    return (
      <div>
        <Searchbar search={searchQuery} onSubmit={searchImages} />

        <ImageGallery items={images} openModal={openModal} />

        {isLoading && <Loader />}

        {Boolean(images.length) && (
          <Button onClick={loadMore} total={totalHits} items={images} />
        )}

        {showModal && (
          <Modal close={closeModal}>
            <Image src={url} alt="photo" />
          </Modal>
        )}

        <GlobalStyle />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }
}
