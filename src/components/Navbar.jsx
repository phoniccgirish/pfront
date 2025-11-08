import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (
          section &&
          section.offsetTop <= scrollY &&
          section.offsetTop + section.offsetHeight > scrollY
        ) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with offset for fixed navbar
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    const navbarHeight = 80;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <nav className='bg-white/80 backdrop-blur-md w-full fixed top-0 left-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <a href='#home' className='text-2xl font-bold text-gray-900'>
            exoticc.girish
          </a>

          <div className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full transition-transform duration-300 ${
                    activeSection === link.href
                      ? "bg-blue-600 scale-x-100"
                      : "bg-blue-600 scale-x-0"
                  } origin-left`}
                ></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100'
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden border-t border-gray-200 bg-white'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.href
                    ? "text-blue-600 bg-gray-100"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
