// src/component/BaseImage.jsx
import React from 'react';
import { getAssetUrl } from '../js/getAssetUrl';

const BaseImage = ({ src, alt = '', ...props }) => {
  return <img src={getAssetUrl(src)} alt={alt} {...props} />;
};

export default BaseImage;