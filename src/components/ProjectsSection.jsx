import React from "react";
// 1. Import icons for the links
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectsSection = () => {
  // 2. Expanded the projects array with more data
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Built a personal portfolio website to showcase skills and projects using React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      imageUrl: "./p.png",
      liveUrl: "https://pfront-one.vercel.app/",
      repoUrl: "https://github.com/phoniccgirish/pfront",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Developed an interactive Tic Tac Toe game with dynamic game logic and responsive design.",
      tags: ["React", "JavaScript", "CSS"],
      imageUrl: "./t.png", // Placeholder image
      liveUrl: "https://tic-tac-toe-toag.vercel.app/", // Replace '#' with your live link
      repoUrl: "https://github.com/phoniccgirish/Tic-Tac-Toe", // Replace '#' with your repo link
    },
    {
      title: "Weather Web App",
      description:
        "Developed a weather application using an external API to display real-time weather data.",
      tags: ["JavaScript", "HTML", "CSS", "API"],
      imageUrl: "./w.png",
      liveUrl: "https://weather-app0202.netlify.app/",
      repoUrl: "#",
    },
  ];

  return (
    <section id='projects' className='pt-20 scroll-mt-20 md:pt-32 bg-gray-50'>
      <div className='px-4 mx-auto text-center max-w-7xl'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          My Projects
        </h2>
        <p className='mt-4 text-lg text-gray-600'>A few things I've built.</p>

        {/* 3. Updated grid for the new card layout */}
        <div className='grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.title}
              // 4. Card layout updated:
              // - overflow-hidden clips the image
              // - flex-col makes the card align vertically
              // - transition & hover effects added
              className='flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1'
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className='flex-shrink-0 object-cover w-full h-48'
              />

              {/* Card Content */}
              {/* 5. flex-grow makes this section fill the available space */}
              <div className='flex flex-col flex-grow p-6'>
                {/* Tech Tags */}
                <div className='flex flex-wrap gap-2 mb-3'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className='mb-2 text-xl font-bold text-left text-gray-900'>
                  {project.title}
                </h3>

                {/* Description */}
                <p className='text-base text-left text-gray-600'>
                  {project.description}
                </p>

                {/* 6. Action Links (mt-auto pushes this to the bottom) */}
                <div className='flex justify-start gap-4 pt-6 mt-auto'>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700'
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900'
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
