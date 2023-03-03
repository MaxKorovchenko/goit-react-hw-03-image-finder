import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => {
  return <img src={webformatURL} alt={tags} />;
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
};
