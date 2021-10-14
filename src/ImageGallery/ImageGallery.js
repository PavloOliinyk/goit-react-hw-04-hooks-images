import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ images, onModalClick }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }, index) => (
        <ImageGalleryItem
          onModalClick={() => onModalClick(index)}
          key={`${id}-${uuidv4()}`}
          image={webformatURL}
          modalImage={largeImageURL}
          description={tags.split(',')[0]}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onModalClick: PropTypes.func.isRequired,
};

export default ImageGallery;
