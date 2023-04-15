import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';
import LazyShow from './LazyShow';

const Faq = () => {
  // const { faq } = config;
  const { title, items: faqList } = config.faq;
  return (
    <div className={`pt-8 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <Divider />
        <LazyShow>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {faqList.map((faq) => (
                <div key={faq.question} className="relative">
                  <dt>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </p>
                  </dt>
                  <dd className="mt-2 mx-16 text-base text-gray-500">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </LazyShow>
      </div>
    </div>
  );
};

export default Faq;
