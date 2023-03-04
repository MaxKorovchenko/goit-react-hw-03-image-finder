import PropTypes from 'prop-types';

import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ tags, webformatURL }) => {
  return <Image src={webformatURL} alt={tags} />;
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
};
