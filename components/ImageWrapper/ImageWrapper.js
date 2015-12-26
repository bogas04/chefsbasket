import React from 'react';

export default function ImageWrapper ({ src, alt, height }) {
  return (
    <div className="image-wrapper" style={{ height: height || '' }}>
      <img src={src} alt={alt}/>
    </div>
  );
}
