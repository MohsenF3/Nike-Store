import React from "react";

const Loader = () => {
  return (
    <div className="flex text-center flex-col items-center justify-center w-screen h-screen">
      <h3 className="text-gradient font-mono text-4xl font-bold mb-7">
        Welcome To Nike Store
      </h3>
      <div className="flex flex-row  gap-2  ">
        <div className="w-4 h-4 rounded-full bg-yellow-400 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
