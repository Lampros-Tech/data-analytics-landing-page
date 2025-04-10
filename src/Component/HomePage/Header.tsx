"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Governance', href: '/governance' },
    { name: 'Contribution', href: '/contribution' },
  ];

  return (
    <nav className="absolute top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center bg-[#154E4D]  rounded-full p-2">
        {/* Animated Background */}
        <div
          className="absolute h-[80%] transition-all duration-300 ease-in-out bg-[#7DDEDA] rounded-full"
          style={{
            left: `${navItems.findIndex(item => item.name === activeTab) * 25}%`,
            width: '25%',
          }}
        />

        {/* Navigation Items */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            className={`relative z-10 px-6 py-1.5 text-sm transition-colors duration-300 rounded-full ${
              activeTab === item.name
                ? 'text-[#154E4D] font-medium'
                : 'text-white hover:text-[#7DDEDA]'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
