import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Gif = () => {
  return (
    <>
    <DotLottieReact
      src="/gifs/not-found.json"
      loop
      autoplay
    />
    </>
  );
};

export default Gif