import React, { useState, useRef, useEffect } from "react";
import { currentUser, projects, skills, exps } from "./UserData.js";
import { IoAddOutline } from 'react-icons/io5';
import { BiPencil } from 'react-icons/bi';

const ProfileSection = ({ userdata }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && textRef.current.scrollHeight > 50) {
      setShowSeeMore(true);
    }
  }, [userdata]);
  
  console.log("Data loaded:", { currentUser, projects, skills, exps });
  
  return (
    <div className="profile_section flex flex-col gap-6">
      <div className="user-about">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <div className="relative">
          <p
            ref={textRef}
            className={`text-gray-700 transition-all duration-300 ${!expanded ? "line-clamp-2" : ""}`}
          >
            {currentUser.userDesc}
          </p>
          {showSeeMore && (
            <button
              className="text-blue-600 bg-white -ml-5 font-medium mt-1"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "SEE LESS" : "SEE MORE"}
            </button>
          )}
        </div>
      </div>

      <div className="projects-section">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Projects
            <span className="text-gray-500 font-normal text-sm">
              {showProjects ? projects.length : 3} of {projects.length}
            </span>
          </h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100">
              <IoAddOutline size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100">
              <BiPencil size={18} />
            </button>
          </div>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects
            .slice(0, showProjects ? projects.length : 3)
            .map((project) => (
              <div key={project.id} className="project-card flex flex-col">
                <div className="project-image mb-2 overflow-hidden rounded">
                  <img
                    src={project.projectImage || "/api/placeholder/300/200"}
                    alt={project.projecTitle}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <h3 className="font-medium text-base">{project.projecTitle}</h3>
                <p className="text-sm text-gray-600">
                  {project.projectType}, {project.projectDate}
                </p>
              </div>
            ))}
        </div>

        <div className="mt-3">
          <button
            className="text-blue-600 bg-white -ml-5 font-medium hover:underline"
            onClick={() => setShowProjects(!showProjects)}
          >
            {showProjects ? "SHOW LESS" : "SHOW ALL (" + projects.length + ")"}
          </button>
        </div>
      </div>

      <div className="skills-section mt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100">
              <IoAddOutline size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100">
              <BiPencil size={18} />
            </button>
          </div>
        </div>

        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills
            .slice(0, showSkills ? skills.length : 3)
            .map((skill) => (
              <div
                key={skill.id}
                className="skill-card flex justify-between items-center p-3 border border-gray-200 rounded"
              >
                <h3 className="font-medium">{skill.title}</h3>
                <span className="text-blue-600 font-bold">{skill.score}</span>
              </div>
            ))}
        </div>

        <div className="mt-3">
          <button
            className="text-blue-600 bg-white -ml-5 font-medium hover:underline"
            onClick={() => setShowSkills(!showSkills)}
          >
            {showSkills ? "SHOW LESS" : "SHOW ALL (" + skills.length + ")"}
          </button>
        </div>
      </div>
      
      <div className="experience_section mt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Experience</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100">
              <IoAddOutline size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100">
              <BiPencil size={18} />
            </button>
          </div>
        </div>
        <div className="experience_list flex flex-col gap-4">
          {exps.map((exp, index) => (
            <div
              className="exp_container flex p-4 border-b border-gray-200 gap-4 text-sm"
              key={index}
            >
              <div className="exp-img rounded-full bg-[#F59B2D] w-12 h-12 flex-shrink-0"></div>
              <div className="exp_details flex flex-col gap-2 text-gray-500 flex-1">
                <h3 className="font-bold text-base text-black dark:text-white">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:gap-6 items-start sm:items-center text-black">
                  <span className="font-semibold">{exp.company}</span>
                  <span>{exp.type}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-6 items-start sm:items-center text-black">
                  <div className="exp_time_period">
                    <span>{exp.start}</span> - <span>{exp.end}</span>
                  </div>
                  <span className="text-blue-600">{exp.time}</span>
                </div>
                <p className="text-black">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;