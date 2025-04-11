"use client"
import React, { useState } from 'react'
import Typography from '../UI/Typography';
import faqData from '../../data/faq';

const FAQS = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 xl:px-28 bg-black text-white">
      <Typography 
        variant="h1" 
        color='primary'
        className='mb-6 ml-4'
      >
        FAQs
      </Typography>
      <div className="flex flex-col max-w-full mx-auto gap-1.5">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`p-6 cursor-pointer rounded-lg transition-all duration-700 ease-in-out
              ${hoveredId === faq.id ? 'bg-[#002320]' : 'bg-[#151515]'}`}
            onMouseEnter={() => setHoveredId(faq.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex items-center gap-16">
              <Typography 
                variant="body2" 
                className="text-[#00FFF0] min-w-[2rem]"
              >
                {faq.id}
              </Typography>
              <Typography 
                variant="h4" 
                className={`font-normal transition-colors duration-700 ease-in-out
                  ${hoveredId === faq.id ? 'text-[#00FFF0]' : 'text-white'}`}
              >
                {faq.question}
              </Typography>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-700 ease-in-out
                ${hoveredId === faq.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
              <Typography 
                variant="body1" 
                className="ml-24 text-white/80"
              >
                {faq.answer}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQS
