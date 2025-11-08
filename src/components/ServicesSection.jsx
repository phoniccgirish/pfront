import React from "react";
// 1. Import the icons you need
import { FaCode, FaDatabase } from "react-icons/fa";
import { FiLayers, FiTool } from "react-icons/fi";

const ServicesSection = () => {
  // 2. Add an 'icon' element to your skills data
  const skills = [
    {
      name: "Languages",
      items: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
      icon: <FaCode className='text-blue-600' />,
    },
    {
      name: "Frameworks",
      items: ["React + Vite", "Tailwind CSS"],
      icon: <FiLayers className='text-blue-600' />,
    },
    {
      name: "Databases",
      items: ["MySQL", "MongoDB", "Firebase"],
      icon: <FaDatabase className='text-blue-600' />,
    },
    {
      name: "Tools",
      items: ["Git", "VS Code", "Excel"],
      icon: <FiTool className='text-blue-600' />,
    },
  ];

  return (
    <section id='services' className='pt-20 scroll-mt-20 md:pt-32 bg-gray-50'>
      <div className='px-4 mx-auto text-center max-w-7xl'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          My Tech Stack
        </h2>
        <p className='mt-4 text-lg text-gray-600'>
          Technologies I work with to build practical solutions.
        </p>
        <div className='grid gap-8 mt-12 md:grid-cols-2'>
          {skills.map((category) => (
            <div
              key={category.name}
              // 3. Added text-left and hover effects to the card
              className='p-6 text-left transition-all duration-300 bg-white rounded-lg shadow-lg md:p-8 hover:shadow-xl hover:-translate-y-1'
            >
              {/* 4. New layout for icon + title */}
              <div className='flex items-center gap-4'>
                <span className='text-3xl'>{category.icon}</span>
                <h3 className='text-2xl font-bold text-gray-900'>
                  {category.name}
                </h3>
              </div>
              {/* 5. Changed to justify-start and added more margin-top */}
              <div className='flex flex-wrap justify-start gap-2 mt-6'>
                {category.items.map((item) => (
                  <span
                    key={item}
                    // 6. Updated pill styling for a cleaner look
                    className='px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
