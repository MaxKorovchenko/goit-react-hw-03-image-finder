import PropTypes from 'prop-types';

export const Button = ({ onClick, total, items }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      hidden={total === items.length ? true : false}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};
