/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const Thumb = ({ file }) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!file) { return; }

    setLoading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) { return null; }

  if (loading) { return <p>loading...</p>; }
  return (
    <img
      src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200}
    />
  );
};

export default Thumb;
