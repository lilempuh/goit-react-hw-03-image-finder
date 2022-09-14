import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ picture, largeImage, tags, onOpenImage }) => {
  return (
    <ImageGalleryItems>
      <ImageGalleryItemImage
        src={picture}
        alt={tags}
        onClick={() => onOpenImage(largeImage)}
      />
    </ImageGalleryItems>
  );
};
ImageGalleryItem.propTypes = {
  picture: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onOpenImage: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
