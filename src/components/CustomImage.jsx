import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export default function CustomImage({ src, hashSrc, ...rest }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash={hashSrc}
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        {...rest}
        src={src}
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
    </>
  );
}
