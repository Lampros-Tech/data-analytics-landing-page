"use client"
import React from 'react';

const FontExample = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-league-spartan mb-6">
        League Spartan Font Example
      </h1>
      
      <p className="text-lg font-raleway mb-4">
        This paragraph is using the Raleway font. Raleway is an elegant sans-serif typeface family. 
        Initially designed by Matt McInerney as a single thin weight, it was expanded into a 9 weight 
        family by Pablo Impallari and Rodrigo Fuenzalida in 2012.
      </p>
      
      <h2 className="text-3xl font-league-spartan mb-4">
        Another League Spartan Heading
      </h2>
      
      <p className="text-lg font-raleway mb-4">
        League Spartan is a geometric sans-serif typeface inspired by the classic ATF Spartan. 
        It was designed by Micah Rich and released by The League of Moveable Type in 2014.
      </p>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-league-spartan mb-2">Using Font Classes:</h3>
        <ul className="font-raleway list-disc pl-5">
          <li>Use <code className="bg-gray-200 px-1 rounded">font-league-spartan</code> for League Spartan</li>
          <li>Use <code className="bg-gray-200 px-1 rounded">font-raleway</code> for Raleway</li>
        </ul>
      </div>
    </div>
  );
};

export default FontExample; 