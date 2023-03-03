import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items, openModal }) => {
  //console.log(items);
  return (
    <ul>
      {items.map(({ id, largeImageURL, ...otherProps }) => (
        <li key={id} onClick={() => openModal(largeImageURL)}>
          <ImageGalleryItem {...otherProps} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
