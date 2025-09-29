import React, { useState } from 'react';

const LazyImage = ({ src, alt, className, onClick, eager = false }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      loading={eager ? 'eager' : 'lazy'}
      onLoad={() => setLoaded(true)}
      className={className}
      style={{
  
        transition: 'filter 0.3s ease-in-out',
      }}
    />
  );
};

export default LazyImage;
