import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    modalImage: PropTypes.string.isRequired,
    description: PropTypes.string,
    onModalClick: PropTypes.func.isRequired,
  };

  render() {
    const { image, modalImage, description, onModalClick } = this.props;

    return (
      <li className={s.ImageGalleryItem} onClick={onModalClick}>
        <img
          src={image}
          data-src={modalImage}
          alt={description}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
