'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null); //INFO: make sure preview is reset
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='the image selected by the user'
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg, image/jpg'
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required //INFO: form can't be submitted without an image
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};
ImagePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default ImagePicker;
