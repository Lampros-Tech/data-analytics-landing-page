"use client"
import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabLeft, setActiveTabLeft] = useState(0);
  const tabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  interface DropdownItem {
    name: string;
    href: string;
  }

  interface NavItem {
    name: string;
    href: string;
    isDropdown?: boolean;
    external?: boolean;
    dropdownItems?: DropdownItem[];
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update active tab position and width when activeTab changes
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const parentElement = activeTabElement.parentElement;
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        
        // Calculate position relative to parent
        const left = tabRect.left - parentRect.left;
        setActiveTabLeft(left);
        setActiveTabWidth(tabRect.width);
      }
    }
  }, [activeTab]);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '#', 
      isDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: 'https://lampros.tech/about-us/' },
        { name: 'Careers', href: 'https://lampros.tech/careers-at-lampros-tech/' }
      ]
    },
    { name: 'Blog', href: 'https://lampros.tech/blog/', external: true },
    { name: 'Case Studies', href: 'https://lampros.tech/case-studies/', external: true },
    { name: 'Contact Us', href: 'https://lampros.tech/contactus/', external: true },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.isDropdown) {
      setIsAboutDropdownOpen(!isAboutDropdownOpen);
      setActiveTab('About');
    } else {
      setActiveTab(item.name);
      setIsAboutDropdownOpen(false);
    }
  };

  return (
    <nav className="absolute top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center bg-[#154E4D] rounded-full p-2">
        {/* Animated Background */}
        <div
          className="absolute h-[80%] transition-all duration-300 ease-in-out bg-[#7DDEDA] rounded-full"
          style={{
            left: `${activeTabLeft}px`,
            width: `${activeTabWidth}px`,
          }}
        />

        {/* Navigation Items */}
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className="relative"
            ref={(el) => { tabRefs.current[item.name] = el; }}
          >
            {item.isDropdown ? (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => handleNavClick(item)}
                  className={`relative z-10 px-6 py-1.5 text-sm transition-colors duration-300 rounded-full ${
                    activeTab === item.name
                      ? 'text-[#154E4D] font-medium'
                      : 'text-white hover:text-[#7DDEDA]'
                  }`}
                >
                  {item.name}
                </button>
                
                {/* Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#151515] rounded-xl shadow-lg z-50 border border-[#7DDEDA]/20">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#7DDEDA]/10 hover:text-white transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                onClick={() => handleNavClick(item)}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`relative z-10 px-6 py-1.5 text-sm transition-colors duration-300 rounded-full ${
                  activeTab === item.name
                    ? 'text-[#154E4D] font-medium'
                    : 'text-white hover:text-[#7DDEDA]'
                }`}
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
