import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { DivModal, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Overlay onClick={this.closeModal}>
        <DivModal>{children}</DivModal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};
