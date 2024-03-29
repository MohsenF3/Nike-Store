import React from "react";
import CustomImage from "../CustomImage";

const Clips = ({ imgsrc, hashSrc }) => {
  return (
    <>
      <div className="relative h-28 w-32 rounded-xl overflow-hidden group  transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
        <CustomImage
          src={imgsrc}
          hashSrc={hashSrc}
          alt="img/clips"
          className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500"
        />
      </div>
    </>
  );
};

export default Clips;
