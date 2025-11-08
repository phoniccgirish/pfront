import React from "react";

const AboutSection = () => {
  return (
    <section id='about' className='scroll-mt-20 pt-20 md:pt-32'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          About Me
        </h2>
        <p className='mt-4 text-lg text-gray-600'>
          A quick summary of who I am.
        </p>
      </div>

      <div className='mt-12 bg-white shadow-xl rounded-lg overflow-hidden max-w-5xl mx-auto p-8 md:p-12'>
        <h3 className='text-2xl font-bold text-blue-600'>Summary</h3>
        <p className='mt-4 text-gray-700 text-base leading-relaxed'>
          I am a 3rd-year B.Tech CS_Design student with a strong focus on
          software development and problem-solving. I have hands-on experience
          in programming with Java and web technologies, along with projects in
          React. My key strengths include quick learning and applying technical
          knowledge to build practical solutions.
        </p>

        <h3 className='text-2xl font-bold text-blue-600 mt-10'>Education</h3>
        <ul className='mt-4 space-y-4 text-gray-700'>
          <li>
            <strong className='block text-gray-900'>
              Bachelor of Technology (B.Tech) in Computer Science & Design
            </strong>
            Greater Noida Institute of Technology (2023–2027)
            <span className='block text-sm text-gray-500'>
              Current CGPA: 7.8/10
            </span>
          </li>
          <li>
            <strong className='block text-gray-900'>
              Senior Secondary (Class XII)
            </strong>
            S.V.M Inter College, Gorakhpur (2023)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
