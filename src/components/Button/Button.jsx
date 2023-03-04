import PropTypes from 'prop-types';

import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick, total, items }) => {
  return (
    <LoadMoreBtn onClick={onClick} type="button" total={total} items={items}>
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};
