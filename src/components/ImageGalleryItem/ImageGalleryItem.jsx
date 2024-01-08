import React from 'react';
import classes from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={classes.imageGalleryItem}>
      <img
        className={classes.imageGalleryItemImage}
        src={image.webformatURL}
        alt=""
      />
    </li>
  );
};

export default ImageGalleryItem;
