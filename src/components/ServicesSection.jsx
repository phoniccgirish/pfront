import React from "react";

const ServicesSection = () => {
  const skills = [
    { name: "Languages", items: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
    { name: "Frameworks", items: ["React + Vite", "Tailwind CSS"] },
    { name: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
    { name: "Tools", items: ["Git", "VS Code", "Excel"] },
  ];

  return (
    <section id='services' className='scroll-mt-20 pt-20 md:pt-32 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          Services & Skills
        </h2>
        <p className='mt-4 text-lg text-gray-600'>
          Technologies I work with to build practical solutions.
        </p>
        <div className='mt-12 grid gap-8 md:grid-cols-2'>
          {skills.map((category) => (
            <div
              key={category.name}
              className='bg-white p-6 rounded-lg shadow-lg'
            >
              <h3 className='text-xl font-bold text-blue-600'>
                {category.name}
              </h3>
              <div className='mt-4 flex flex-wrap gap-2 justify-center'>
                {category.items.map((item) => (
                  <span
                    key={item}
                    className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
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
