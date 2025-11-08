import React from "react";

const HomeSection = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id='home'
      className='scroll-mt-20 pt-24 md:pt-32 min-h-screen flex items-center justify-center'
    >
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-sm font-semibold text-blue-600 uppercase tracking-wide'>
          Girish Yadav
        </h2>
        <h1 className='mt-4 text-4xl md:text-6xl font-extrabold text-gray-900'>
          Software Developer
          <span className='block text-gray-700'>& Problem Solver</span>
        </h1>
        <p className='mt-6 max-w-2xl mx-auto text-lg text-gray-600'>
          I'm a 3rd-year B.Tech CS_Design student focused on software
          development, web technologies, and practical problem-solving.
        </p>
        <div className='mt-10 flex flex-col sm:flex-row justify-center gap-4'>
          <a
            href='#projects'
            className='inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md'
          >
            View My Projects
          </a>
          <button
            onClick={scrollToContact}
            className='inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 shadow-md'
          >
            Get In Touch →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
