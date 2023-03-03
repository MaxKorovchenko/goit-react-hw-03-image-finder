import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map(({ id, ...otherProps }) => (
        <li key={id}>
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
