import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image, modalImage, description, onModalClick }) {
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

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  modalImage: PropTypes.string.isRequired,
  description: PropTypes.string,
  onModalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
