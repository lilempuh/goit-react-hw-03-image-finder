import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryy } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryy>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          picture={webformatURL}
          tags={tags}
          largeImage={largeImageURL}
          onOpenImage={onImageClick}
        />
      ))}
    </ImageGalleryy>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
