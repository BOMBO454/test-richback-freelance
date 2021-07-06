import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import UploadIcon from '../../images/file.svg';
import EmptyImage from '../../images/Empty.png';

export default function Droparea({ disabled = false, image }) {
  const [uploadedImage, setUploadedImage] = useState(EmptyImage);
  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();
    const [file] = acceptedFiles;

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setUploadedImage(UploadIcon);
    }
  }, []);

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className="dropzone">
          <div className="dropzone__wrapper">
            {!disabled && (
              <input {...getInputProps()} className="dropzone__input" />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {!uploadedImage && <img src={UploadIcon} alt="Upload File" />}
            {!uploadedImage && <p>Upload file</p>}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={disabled ? image : uploadedImage}
              placeholder="empty"
              alt=""
              layout="fill"
            />
          </div>
        </div>
      )}
    </Dropzone>
  );
}

Droparea.propTypes = {
  disabled: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
