"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/Homepage.module.css";
import logo from "@/assets/images/Homepage/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { HiX } from "react-icons/hi";
import { RiMenu4Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabLeft, setActiveTabLeft] = useState(0);
  const tabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    scrollTo?: string;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
        if (activeTab === "About") {
          // Redirect to home when dropdown is closed
          router.push("/");
          setActiveTab("Home");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeTab, router]);

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const parentElement = activeTabElement.parentElement;
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();

        const left = tabRect.left - parentRect.left;
        setActiveTabLeft(left);
        setActiveTabWidth(tabRect.width);
      }
    }
  }, [activeTab]);

  // Set initial active tab based on current path
  useEffect(() => {
    // Handle nested routes
    if (pathname.startsWith("/blog")) {
      setActiveTab("Blog");
    } else if (pathname.startsWith("/case-studies")) {
      setActiveTab("Case Studies");
    } else if (pathname === "/") {
      setActiveTab("Home");
    }
  }, [pathname]);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { name: "About Us", href: "https://lampros.tech/about-us/" },
        {
          name: "Careers",
          href: "https://lampros.tech/careers-at-lampros-tech/",
        },
      ],
    },
    { name: "Blog", href: "/blog" },
    {
      name: "Case Studies",
      href: "/case-studies/layerzero-user-behavior-analytics",
    },
    {
      name: "Contact Us",
      href: "#contactSection",
      scrollTo: "contactSection",
    },
  ];

  const scrollToContactSection = () => {
    setTimeout(() => {
      const element = document.getElementById("contactSection");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure navigation has completed
  };

  const handleNavClick = (item: NavItem, e?: React.MouseEvent) => {
    // Special handling for Contact Us
    if (item.name === "Contact Us") {
      if (e) e.preventDefault();

      if (pathname !== "/") {
        // If not on homepage, navigate to homepage first
        router.push("/");
        // After navigation, scroll to contact section
        scrollToContactSection();
      } else {
        // If already on homepage, just scroll
        scrollToContactSection();
      }

      // Always keep Home tab active when clicking Contact Us
      setActiveTab("Home");
      return;
    }

    // Handle dropdown
    if (item.isDropdown) {
      setIsAboutDropdownOpen(!isAboutDropdownOpen);
      setActiveTab(item.name);
      return;
    }

    // Handle regular tabs
    if (item.external) {
      // External links
      setActiveTab("Home");
    } else {
      // Internal navigation
      setActiveTab(item.name);
      if (e) {
        e.preventDefault();
        router.push(item.href);
      }
    }

    // Close dropdown if open
    setIsAboutDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-4 3xl:max-w-[1600px] 3xl:mx-auto mt-2">
        <div
          className={`flex items-center justify-between rounded-2xl px-6 py-4 bg-[#1C1C1C]/90`}
        >
          <Link
            href="/"
            onClick={() => setActiveTab("Home")}
            className="flex-shrink-0"
          >
            <Image src={logo} alt="logo" className="w-36 md:w-48" />
          </Link>

          <button
            className="xl:hidden p-2 rounded-md bg-[#154E4D]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <RiMenu4Fill size={32} className="text-[#7DDEDA]" />
          </button>

          <div className="hidden xl:flex items-center justify-center">
            <div className="relative flex items-center rounded-full p-2">
              <div
                className="absolute h-[80%] transition-all duration-300 ease-in-out "
                style={{
                  left: `${activeTabLeft}px`,
                  width: `${activeTabWidth}px`,
                }}
              />

              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => {
                    tabRefs.current[item.name] = el;
                  }}
                >
                  {item.isDropdown ? (
                    <div ref={dropdownRef} className="relative">
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`relative z-10 px-6 py-1.5 font-[300] text-[24px] transition-colors duration-300 rounded-full cursor-pointer flex items-center gap-2 ${
                          styles.raleway
                        } ${
                          activeTab === item.name
                            ? "text-[#154E4D] "
                            : "text-[#7DDEDA]"
                        }`}
                      >
                        {item.name}
                        <IoIosArrowDown className="text-[20px]" />
                      </button>

                      {isAboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-[#151515] rounded-xl shadow-lg z-50 border border-[#7DDEDA]/20">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`block px-4 py-3 font-[300] text-[24px] text-gray-300 hover:bg-[#7DDEDA]/10 hover:text-white transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl font-raleway`}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item, e)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-10 px-6 py-1.5  text-[24px] transition-colors duration-300 rounded-full ${
                        styles.raleway
                      } ${
                        activeTab === item.name
                          ? "text-[#154E4D] font-medium"
                          : "text-[#7DDEDA] font-[300]"
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`relative z-10 px-6 py-1.5  text-[24px] transition-colors duration-300 rounded-full ${
                        styles.raleway
                      } ${
                        activeTab === item.name
                          ? "text-[#00695F] font-medium"
                          : "text-[#7DDEDA] font-[300]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`
            fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50
            bg-[#154E4D] shadow-2xl
            rounded-l-3xl
            flex flex-col
            transition-transform duration-300
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          style={{ minWidth: 280 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#7DDEDA]/20 transition"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX size={32} className="text-[#7DDEDA]" />
          </button>

          <nav className="flex flex-col gap-2 px-6 mt-20">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.isDropdown ? (
                  <div ref={dropdownRef}>
                    <button
                      onClick={() => setIsAboutDropdownOpen((open) => !open)}
                      className={`
                        flex items-center justify-between w-full
                        px-5 py-3 rounded-xl
                        text-lg font-semibold
                        transition
                        ${styles.raleway}
                        ${activeTab === item.name ? "bg-[#7DDEDA] text-[#154E4D]" : "text-[#7DDEDA] hover:bg-[#7DDEDA]/10"}
                      `}
                    >
                      {item.name}
                      <span
                        className={`ml-2 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </button>
                    {/* Dropdown */}
                    <div
                      className={`
                        transition-all duration-300 overflow-hidden
                        ${isAboutDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            block px-8 py-2 text-base text-[#7DDEDA] hover:bg-[#7DDEDA]/10 rounded-lg
                            ${styles.raleway}
                          `}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      block px-5 py-3 rounded-xl text-lg font-semibold
                      transition
                      ${styles.raleway}
                      ${activeTab === item.name ? "bg-[#7DDEDA] text-[#154E4D]" : "text-[#7DDEDA] hover:bg-[#7DDEDA]/10"}
                    `}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`
                      block px-5 py-3 rounded-xl text-lg font-semibold
                      transition
                      ${styles.raleway}
                      ${activeTab === item.name ? "bg-[#7DDEDA] text-[#154E4D]" : "text-[#7DDEDA] hover:bg-[#7DDEDA]/10"}
                    `}
                  >
                    {item.name}
                  </Link>
                )}
                {/* Divider */}
                <div className="border-b border-[#7DDEDA]/20 last:border-none" />
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
