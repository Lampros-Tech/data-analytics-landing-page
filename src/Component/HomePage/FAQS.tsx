"use client"
import React, { useState } from 'react'
import faqData from '../../data/faq';
import Button from '../UI/button';

const FAQS = () => {
  const INITIAL_VISIBLE_COUNT = 5;
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(faqData.length); // Set visible count to the total number of FAQs
  };

  const handleViewLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const visibleFaqs = faqData.slice(0, visibleCount);
  const areAllVisible = visibleCount === faqData.length;
  const canShowMore = faqData.length > INITIAL_VISIBLE_COUNT;

  return (
    <section className="py-16 mx-4 3xl:max-w-[1600px] 3xl:mx-auto bg-black text-white">
      <h1
        className={`font-leaguespartan ml-4 text-[56px] md:text-[100px] lg:text-[128px] text-[#7DDEDA] font-light`}
      >
        FAQs
      </h1>
      <div className="flex flex-col max-w-full mx-auto gap-1.5">
        {visibleFaqs.map((faq) => (
          <div
            key={faq.id}
            className={`p-6 cursor-pointer rounded-lg transition-all duration-700 ease-in-out
              ${hoveredId === faq.id ? 'bg-[#002320]' : 'bg-[#151515]'}`}
            onMouseEnter={() => setHoveredId(faq.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
              <p
                className={`font-leaguespartan text-[18px] md:text-[24px] lg:text-[32px] font-light min-w-[2rem]`}
              >
                {faq.id}
              </p>
              <p
                className={`font-leaguespartan text-[18px] md:text-[24px] lg:text-[32px] font-light transition-colors duration-700 ease-in-out
                  ${hoveredId === faq.id ? 'text-[#00FFF0]' : 'text-white'}`}
              >
                {faq.question}
              </p>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out
                ${hoveredId === faq.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
              <p
                className={`font-raleway text-[12px] md:text-[16px] lg:text-[20px] ml-12 md:ml-16 lg:ml-24 text-white/80`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      {canShowMore && (
        <div className="flex justify-center mt-8">
          {areAllVisible ? (
            // Show "View Less" button if all are visible
            <Button
              variant='secondary'
              onClick={handleViewLess}
            >
              VIEW LESS
            </Button>
          ) : (
            // Show "View More" button if not all are visible
            <Button
              variant='secondary'
              onClick={handleLoadMore}
            >
              VIEW MORE
            </Button>
          )}
        </div>
      )}
    </section>
  );
}

export default FAQS
