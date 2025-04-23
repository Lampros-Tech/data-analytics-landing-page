"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/Homepage.module.css";
import logo from "@/assets/images/Homepage/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

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
    if (pathname === "/") {
      setActiveTab("Home");
    } else if (pathname === "/blog") {
      setActiveTab("Blog");
    } else if (pathname === "/case-studies/layerzero-user-behavior-analytics") {
      setActiveTab("Case Studies");
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
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="mx-4 3xl:max-w-[1600px] 3xl:mx-auto">
        <div
          className={`flex items-center justify-center rounded-2xl ${
            scrolled ? "bg-[#101010]/50 backdrop-blur-md" : "bg-transparent"
          } px-6 py-3`}
        >
          <Link href="/" onClick={() => setActiveTab("Home")} className="flex-shrink-0 w-fit">
            <Image src={logo} alt="logo" className="w-36 md:w-48" />
          </Link>

          <div className="flex items-center w-full justify-center">
            <div className="relative -translate-x-[72px] md:-translate-x-[96px] flex items-center bg-[#154E4D] rounded-full p-2">
              <div
                className="absolute h-[80%] transition-all duration-300 ease-in-out bg-[#7DDEDA] rounded-full"
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
                        className={`relative z-10 px-6 py-1.5 text-base transition-colors duration-300 rounded-full cursor-pointer ${
                          styles.raleway
                        } ${
                          activeTab === item.name
                            ? "text-[#154E4D] font-medium"
                            : "text-[#7DDEDA]"
                        }`}
                      >
                        {item.name}
                      </button>

                      {isAboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-[#151515] rounded-xl shadow-lg z-50 border border-[#7DDEDA]/20">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`block px-4 py-3 text-base text-gray-300 hover:bg-[#7DDEDA]/10 hover:text-white transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${styles.raleway}`}
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
                      className={`relative z-10 px-6 py-1.5 text-base transition-colors duration-300 rounded-full ${
                        styles.raleway
                      } ${
                        activeTab === item.name
                          ? "text-[#154E4D] font-medium"
                          : "text-[#7DDEDA]"
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`relative z-10 px-6 py-1.5 text-base transition-colors duration-300 rounded-full ${
                        styles.raleway
                      } ${
                        activeTab === item.name
                          ? "text-[#154E4D] font-medium"
                          : "text-[#7DDEDA]"
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
    </div>
  );
};

export default Header;