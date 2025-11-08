import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description:
        "Developed an interactive Tic Tac Toe game with dynamic game logic and responsive design.",
    },
    {
      title: "Portfolio Website",
      description:
        "Built a personal portfolio website to showcase skills and projects using React and Tailwind CSS.",
    },
    {
      title: "Weather Web App",
      description:
        "Developed a weather application using APIs to display real-time weather data.",
    },
  ];

  return (
    <section id='projects' className='scroll-mt-20 pt-20 md:pt-32'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          My Projects
        </h2>
        <p className='mt-4 text-lg text-gray-600'>A few things I've built.</p>
        <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='bg-white rounded-lg shadow-lg p-6'
            >
              <h3 className='text-xl font-bold text-gray-900'>
                {project.title}
              </h3>
              <p className='mt-3 text-base text-gray-600'>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
