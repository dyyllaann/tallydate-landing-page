import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';
import LazyShow from './LazyShow';

const Features = () => {
  const { features } = config;
  const featureItems = features.items;

  return (
    <section className={`bg-background pt-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {features.title}
        </h1>
        <Divider />
        {featureItems.map((item, index) => {
          return (
            <LazyShow key={index}>
              <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
                <div className={`w-full sm:w-1/2 p-6`}>
                  <img
                    className="h-5/6 shadow-md mx-auto"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className={`w-full sm:w-1/2 p-6 flex`}>
                  <div className={`self-center`}>
                    <h3
                      className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-gray-600 mb-8`}>{item.description}</p>
                  </div>
                </div>
              </div>
            </LazyShow>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
