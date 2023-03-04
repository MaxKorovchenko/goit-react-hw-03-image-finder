import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Gallery, Item } from './ImageGallery.styled';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <Gallery>
      {items.map(({ id, largeImageURL, ...otherProps }) => (
        <Item key={id} onClick={() => openModal(largeImageURL)}>
          <ImageGalleryItem {...otherProps} />
        </Item>
      ))}
    </Gallery>
  );
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
