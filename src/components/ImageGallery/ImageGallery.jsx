import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import classes from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={classes.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
