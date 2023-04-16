import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="xs: hidden sm:hidden lg:flex lg:w-1/2 flex">
      <video
        loop
        autoPlay
        muted
        width={300}
        className="m-auto drop-shadow-xl border-2"
      >
        <source src={mainHero.video} type="video/webm" />
      </video>
      {/* <img
        // className="h-56 w-full object-cover sm:h-46 md:h-46 lg:w-46 lg:h-46"
        className="w-2/5 m-auto shadow-lg"
        src={mainHero.imgLightMode}
        alt="happy team image"
      />
      <img
        className="w-2/5 m-auto shadow-lg"
        src={mainHero.imgDarkMode}
        alt="happy team image"
      /> */}
    </div>
  );
};

export default MainHeroImage;
