import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    onModalClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.props.images.map(
          ({ id, webformatURL, largeImageURL, tags }, index) => (
            <ImageGalleryItem
              onModalClick={() => this.props.onModalClick(index)}
              key={`${id}-${uuidv4()}`}
              image={webformatURL}
              modalImage={largeImageURL}
              description={tags.split(',')[0]}
            />
          ),
        )}
      </ul>
    );
  }
}

export default ImageGallery;
