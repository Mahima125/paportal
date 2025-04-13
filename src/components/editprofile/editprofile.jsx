import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack, IoMdTrash } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faSave,
  faTimes,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import DashBoardNavBar from "../helper/DashBoardNavBar";
import RequestBox from "../helper/requestbox";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./profile.css";
const EditProfile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [isEditingProjects, setIsEditingProjects] = useState(false);
  const [isEditingExperiences, setIsEditingExperiences] = useState(false);
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);

  // Function to handle month/year dropdown changes
  const handleExperienceMonthYearChange = (index, dateField, value, type) => {
    const updatedExperience = [...data.experience];
    const currentDate = new Date(updatedExperience[index][dateField]);

    if (type === 'month') {
      // Get month number from month name (0-11)
      const monthIndex = new Date(`${value} 1, 2000`).getMonth();
      currentDate.setMonth(monthIndex);
    } else if (type === 'year') {
      currentDate.setFullYear(parseInt(value));
    }

    updatedExperience[index][dateField] = currentDate;
    setData({
      ...data,
      experience: updatedExperience,
    });
  };

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  useEffect(() => {
    async function fetchdetails() {
      const response = await fetch(`http://localhost:3000/api/getAllData/${id}`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    }
    fetchdetails();
  }, [id]);

  const handleDateChange = (date, setDate) => {
    setDate(date);
  };

  const [isPrivate, setIsPrivate] = useState(true);

  const handleToggle = () => {
    setIsPrivate(!isPrivate);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      basicInfo: {
        ...prevData.basicInfo,
        [name]: value,
      },
    }));
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...data.projects];
    updatedProjects[index][name] = value;
    setData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...data.experience];
    updatedExperience[index][name] = value;
    setData((prevData) => ({
      ...prevData,
      experience: updatedExperience,
    }));
  };

  const handleSaveBasicInfo = async () => {
    console.log(data);
    const email = data.basicInfo.email;
    if (!email || !email.includes("@")) {
      alert("Enter a valid email address");
      return;
    }
    const response = await fetch(
      `http://localhost:3000/api/updateBasicInfo/${data.basicInfo._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ basicInfo: data.basicInfo }),
      }
    );

    if (response.ok) {
      const updatedData = await response.json();
      setData(updatedData);
      navigate("/profile");
    } else {
      alert("Failed to update Basic Info.");
    }
  };

  const handleSaveProject = async (projectIndex) => {
    const project = data.projects[projectIndex];
    const response = await fetch(
      `http://localhost:3000/api/updateProject/${project._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      }
    );

    if (response.ok) {
      const updatedData = await response.json();
      setData(updatedData);
      navigate("/profile");
      alert("Project updated successfully!");
    } else {
      alert("Failed to update Project.");
    }
  };

  const handleSaveExperience = async (experienceIndex) => {
    const experience = data.experience[experienceIndex];
    const response = await fetch(
      `http://localhost:3000/api/updateExperience/${experience._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
      }
    );

    if (response.ok) {
      alert("Experience updated successfully!");
      navigate("/profile");
    } else {
      alert("Failed to update Experience.");
    }
  };

  async function handleAddProject(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      userId: 1,
      projectName: formData.get("projectName"),
      projectDescription: formData.get("projectDescription"),
      projectLink: formData.get("projectLink"),
    };
    if (
      data.projectName.trim().length === 0 ||
      data.projectDescription.trim().length === 0 ||
      data.projectLink.trim().length === 0
    ) {
      alert("Please enter the details");
      return;
    }
    const response = await fetch("http://localhost:3000/api/createProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Project added successfully!");
      navigate("/profile");
    }
  }

  async function handleAddExperience(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      userId: 1,
      companyName: formData.get("companyName"),
      description: formData.get("description"),
      companyLink: formData.get("companyLink"),
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      role: formData.get("role"),
    };
    if (
      data.companyLink.trim().length === 0 ||
      data.companyName.trim().length === 0 ||
      data.description.trim().length === 0 ||
      data.role.trim().length === 0
    ) {
      alert("Please enter the details");
      return;
    }
    const response = await fetch("http://localhost:3000/api/createExperience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Experience created successfully");
      navigate("/profile");
    }
  }
  const handleDeleteProject = async (projectId) => {
    const response = await fetch(
      `http://localhost:3000/api/deleteProject/${projectId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const updatedProjects = data.projects.filter(
        (project) => project._id !== projectId
      );
      setData((prevData) => ({
        ...prevData,
        projects: updatedProjects,
      }));
      alert("Project deleted successfully!");
    } else {
      alert("Failed to delete Project.");
    }
  };
  const handleDeleteExperience = async (experienceId) => {
    const response = await fetch(
      `http://localhost:3000/api/deleteExperience/${experienceId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const updatedExperiences = data.experience.filter(
        (exp) => exp._id !== experienceId
      );
      setData((prevData) => ({
        ...prevData,
        experience: updatedExperiences,
      }));
      alert("Experience deleted successfully!");
    } else {
      alert("Failed to delete Experience.");
    }
  };
  return (
    <>
      <div>
        <DashBoardNavBar />
      </div>
      <section className="relative min-h-screen">
        <div className="lg:w-5/6  w-full mx-auto">
          <main className="mx-[3%] my-[1rem] min-h-[80vh]">
            <button
              className="back_btn text-[2rem] p-0 text-black bg-transparent hover:bg-transparent hover:left-[1.5rem] dark:text-white absolute left-[2rem]"
              onClick={() => navigate("/profile")}
            >
              <IoMdArrowRoundBack />
            </button>
            <div className="page_components h-full flex py-[2rem] gap-[6rem]">
              <section className="h-full rounded-xl  w-[70%] flex flex-col gap-[3rem] -ml-12">
                <div className="flex flex-col gap-4 mt-8 ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold mb-4  font-sans">Basic Info</h2>
                    <div className="toggle-switch flex items-center gap-2">
                      <span className="text-xl">{isPrivate ? "Private" : "Public"}</span>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={isPrivate}
                          onChange={handleToggle}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>


                  <div className="flex flex-col gap-4 pl-0">
                    {isPrivate && (
                      <>
                        <div className="flex flex-col">
                          <label className="font-semibold mb-2">E-mail</label>
                          <input
                            type="text"
                            className="p-2 rounded border border-black focus:outline-none focus:border-black"
                            name="email"
                            value={data?.basicInfo.email || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="font-semibold mb-2">
                            phone number
                          </label>
                          <input
                            type="text"
                            className="p-2 rounded border border-black focus:outline-none focus:border-black"
                            name="mobileNo"
                            value={data?.basicInfo.mobileNo || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </>
                    )}

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">First Name</label>
                      <input
                        type="text"
                        className="p-2 rounded border border-black focus:outline-none focus:border-black"
                        name="firstName"
                        value={data?.basicInfo.firstName || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">Last Name</label>
                      <input
                        type="text"
                        className="p-2 rounded border border-black focus:outline-none focus:border-black"
                        name="lastName"
                        value={data?.basicInfo.lastName || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">Additional Name</label>
                      <input
                        type="text"
                        className="p-2 rounded border border-black focus:outline-none focus:border-black"
                        name="additionalName"
                        value={data?.basicInfo.additionalName || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">HeadLine</label>
                      <textarea
                        className="p-2 rounded border border-black focus:outline-none focus:border-black resize-none"
                        name="location"
                        value={data?.basicInfo.location || ""}
                        onChange={handleInputChange}
                        rows={3} // you can adjust the number of rows as needed
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">Current Position</label>
                      <input
                        type="text"
                        className="p-2 rounded border border-black focus:outline-none focus:border-black"
                        name="currentPosition"
                        value={data?.basicInfo.currentPosition || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">Industry</label>
                      <input
                        type="text"
                        className="p-2 rounded border border-black focus:outline-none focus:border-black"
                        name="industry"
                        value={data?.basicInfo.industry || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">Location</label>
                      <input
                        type="text"
                        className="p-2 rounded border border-black focus:outline-none focus:border-black"
                        name="location"
                        value={data?.basicInfo.location || ""}
                        onChange={handleInputChange}
                      />

                    </div>

                    <button
                      className=" text-white px-32 py-2 rounded mt-4 ml-auto"
                      onClick={handleSaveBasicInfo}
                    >
                      SAVE
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold font-sans">Projects</h2>
                    <div className="flex gap-4">
                      <button className="bg-white text-black px-4 py-2 rounded">
                        <FontAwesomeIcon icon={faPlus} className="text-xl text-black"/>
                      </button>
                      <button className="text-black px-4 py-2 rounded bg-white">
                        <FontAwesomeIcon icon={faPen} className="text-xl text-black" />
                      </button>
                    </div>
                  </div>

                  {/* Always visible project form */}
                  <div className="mb-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <label className="mb-2">Project Name</label>
                        <input
                          type="text"
                          className="p-2 rounded border border-black focus:outline-none focus:border-black"
                          name="projectName"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2">Project Description</label>
                        <textarea
                          className="p-2 rounded border border-black focus:outline-none focus:border-black min-h-[100px]"
                          name="projectDescription"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2">Project Link</label>
                        <input
                          type="text"
                          className="p-2 rounded border border-black focus:outline-none focus:border-black"
                          name="projectLink"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          className=" text-white px-32 py-2 rounded mt-4 ml-auto"
                          onClick={handleAddProject}
                        >
                          SAVE
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Existing Projects List */}
                  {data?.projects && data.projects.length > 0 && (
                    <div className="flex flex-col gap-6">
                      {data.projects.map((project, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-4 py-4 border-grey border-b-4 relative"
                        >
                          {isEditingProjects && (
                            <button
                              className="absolute top-1 right-2 bg-blue-500 text-sm"
                              onClick={() => handleDeleteProject(project._id)}
                            >
                              <IoMdTrash />
                            </button>
                          )}
                          <div className="flex flex-col">
                            <label className="mb-2">Project Name</label>
                            <input
                              type="text"
                              className="p-2 rounded border border-black focus:outline-none focus:border-black"
                              name="projectName"
                              value={project.projectName || ""}
                              onChange={(e) => handleProjectChange(index, e)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="mb-2">Project Description</label>
                            <textarea
                              className="p-2 rounded border border-black focus:outline-none focus:border-black min-h-[100px]"
                              name="projectDescription"
                              value={project.projectDescription || ""}
                              onChange={(e) => handleProjectChange(index, e)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="mb-2">Project Link</label>
                            <input
                              type="text"
                              className="p-2 rounded border border-black focus:outline-none focus:border-black"
                              name="projectLink"
                              value={project.projectLink || ""}
                              onChange={(e) => handleProjectChange(index, e)}
                            />
                          </div>
                          <div className="flex justify-end">
                            <button
                              className=" text-white px-32 py-2 rounded mt-4 ml-auto"
                              onClick={() => handleSaveProject(index)}
                            >
                              SAVE
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4 mt-3">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold  font-sans">Experience</h2>
                    <div className="flex gap-4">
                      <button className="bg-white text-black px-4 py-2 rounded">
                        <FontAwesomeIcon icon={faPlus} className="text-xl text-black"/>
                      </button>
                      <button className="text-black px-4 py-2 rounded bg-white">
                      <FontAwesomeIcon icon={faPen} className="text-xl text-black" />
                      </button>
                    </div>
                  </div>

                  {/* Always visible experience form */}
                  <div className="mb-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <label className="mb-2">Company Name</label>
                        <input
                          type="text"
                          className="p-2 rounded border border-black focus:outline-none focus:border-black"
                          name="companyName"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2">Description</label>
                        <textarea
                          className="p-2 rounded border border-black focus:outline-none focus:border-black min-h-[150px]"
                          name="description"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2">Company Link</label>
                        <input
                          type="text"
                          className="p-2 rounded border border-black focus:outline-none focus:border-black"
                          name="companyLink"
                        />
                      </div>

                      <div className="flex items-center gap-2 my-2 mt-16">
                        <input
                          type="checkbox"
                          id="isCurrentlyWorking"
                          name="isCurrentlyWorking"
                          className="peer hidden"
                          onChange={(e) => setIsCurrentlyWorking(e.target.checked)}
                        />
                        <label
                          htmlFor="isCurrentlyWorking"
                          className="w-5 h-5 flex items-center justify-center rounded cursor-pointer border border-black
                                  peer-checked:bg-green-700 
                                  peer-checked:after:content-['✔'] peer-checked:after:text-white peer-checked:after:text-xs peer-checked:after:font-bold
                                  peer-checked:after:block peer-checked:after:leading-none"
                        ></label>
                        <label htmlFor="isCurrentlyWorking" className="text-gray-600 cursor-pointer">
                          I am currently working in this role
                        </label>
                      </div>

                      <div className="flex flex-col">
                        <label className="mb-2 mt-4 text-gray-600">Start date*</label>
                        <div className="flex gap-2">

                          <div className="relative w-1/2">
                            <select
                              name="startMonth"
                              className="appearance-none w-full p-2 pr-8 rounded border border-black focus:outline-none focus:border-black"
                            >
                              <option value="">Month</option>
                              <option value="January">January</option>
                              <option value="February">February</option>
                              <option value="March">March</option>
                              <option value="April">April</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="August">August</option>
                              <option value="September">September</option>
                              <option value="October">October</option>
                              <option value="November">November</option>
                              <option value="December">December</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg className="w-3 h-3 fill-current text-black" viewBox="0 0 10 6">
                                <path d="M0 0l5 6 5-6z" />
                              </svg>
                            </div>
                          </div>

                          {/* Start Year */}
                          <div className="relative w-1/2">
                            <select
                              name="startYear"
                              className="appearance-none w-full p-2 pr-8 rounded border border-black focus:outline-none focus:border-black"
                            >
                              <option value="">Year</option>
                              <option value="2024">2024</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg className="w-3 h-3 fill-current text-black" viewBox="0 0 10 6">
                                <path d="M0 0l5 6 5-6z" />
                              </svg>

                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="flex flex-col">
                        <label className="mb-2 mt-9 text-gray-600">End date*</label>
                        <div className="flex gap-2">

                          <div className="relative w-1/2">
                            <select
                              name="endMonth"
                              className="appearance-none w-full p-2 pr-8 bg-gray-200 rounded "
                              disabled={isCurrentlyWorking}
                            >
                              <option value="">Month</option>
                              <option value="January">January</option>
                              <option value="February">February</option>
                              <option value="March">March</option>
                              <option value="April">April</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="August">August</option>
                              <option value="September">September</option>
                              <option value="October">October</option>
                              <option value="November">November</option>
                              <option value="December">December</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                              <svg className="w-3 h-3 fill-current text-black" viewBox="0 0 10 6">
                                <path d="M0 0l5 6 5-6z" />
                              </svg>
                            </div>
                          </div>

                          <div className="relative w-1/2">
                            <select
                              name="endYear"
                              className="appearance-none w-full p-2 pr-8 bg-gray-200 rounded "
                              disabled={isCurrentlyWorking}
                            >
                              <option value="">Year</option>
                              <option value="2024">2024</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                              <svg className="w-3 h-3 fill-current text-black" viewBox="0 0 10 6">
                                <path d="M0 0l5 6 5-6z" />
                              </svg>
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="flex justify-end">
                        <button
                          className=" text-white px-32 py-2 rounded mt-4 ml-auto"
                          onClick={handleAddExperience}
                        >
                          SAVE
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Existing Experience List */}
                  {data?.experience && data.experience.length > 0 && (
                    <div className="flex flex-col gap-6">
                      {data.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-4 py-4 border-grey border-b-4 relative"
                        >
                          {isEditingExperiences && (
                            <button
                              className="absolute top-1 right-2 bg-blue-500 text-sm"
                              onClick={() => handleDeleteExperience(exp._id)}
                            >
                              <IoMdTrash />
                            </button>
                          )}
                          <div className="flex flex-col">
                            <label className="mb-2">Company Name</label>
                            <input
                              type="text"
                              className="p-2 rounded border border-black focus:outline-none focus:border-black"
                              name="companyName"
                              value={exp.companyName || ""}
                              onChange={(e) => handleExperienceChange(index, e)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="mb-2">Description</label>
                            <textarea
                              className="p-2 rounded border border-black focus:outline-none focus:border-black min-h-[100px]"
                              name="description"
                              value={exp.description || ""}
                              onChange={(e) => handleExperienceChange(index, e)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="mb-2">Company Link</label>
                            <input
                              type="text"
                              className="p-2 rounded border border-black focus:outline-none focus:border-black"
                              name="companyLink"
                              value={exp.companyLink || ""}
                              onChange={(e) => handleExperienceChange(index, e)}
                            />
                          </div>

                          {/* Checkbox for currently working */}
                          <div className="flex items-center gap-2 my-2 ">
                            <input
                              type="checkbox"
                              id={`isCurrentlyWorking-${index}`}
                              name="isCurrentlyWorking"
                              className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                              checked={exp.isCurrentlyWorking || false}
                              onChange={(e) => {
                                const updatedExperience = [...data.experience];
                                updatedExperience[index].isCurrentlyWorking = e.target.checked;
                                setData({
                                  ...data,
                                  experience: updatedExperience,
                                });
                              }}
                            />
                            <label htmlFor={`isCurrentlyWorking-${index}`} className="text-sm">
                              I am currently working in this role
                            </label>
                          </div>

                          {/* Start date for existing experience */}
                          <div className="flex gap-2">
                            <select
                              name="endMonth"
                              className="p-2 rounded border border-black focus:outline-none w-1/2 focus:border-black"
                              value={new Date(exp.endDate).toLocaleString('default', { month: 'long' })}
                              onChange={(e) => handleExperienceMonthYearChange(index, 'endDate', e.target.value, 'month')}
                            >
                              {['January', 'February', 'March', 'April', 'May', 'June',
                                'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                                  <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                            <select
                              name="endYear"
                              className="p-2 rounded border border-black focus:outline-none w-1/2 focus:border-black"
                              value={new Date(exp.endDate).getFullYear()}
                              onChange={(e) => handleExperienceMonthYearChange(index, 'endDate', e.target.value, 'year')}
                            >
                              {Array.from({ length: 15 }, (_, i) => 2024 - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                          </div>

                          {/* End date for existing experience */}
                          <div className="flex flex-col">
                            <label className="mb-2">End date*</label>
                            {exp.isCurrentlyWorking ? (
                              <div className="flex gap-2">
                                <select
                                  className="p-2 rounded border border-black focus:outline-none w-1/2 focus:border-black"
                                  disabled
                                >
                                  <option>Month</option>
                                </select>
                                <select
                                  className="p-2 rounded border border-black focus:outline-none w-1/2 focus:border-black"
                                  disabled
                                >
                                  <option>Year</option>
                                </select>
                              </div>
                            ) : (
                              <div className="flex gap-2">
                                <select
                                  name="endMonth"
                                  className="p-2 rounded border border-black focus:outline-none w-1/2 focus:border-black"
                                  value={new Date(exp.endDate).toLocaleString('default', { month: 'long' })}
                                  onChange={(e) => handleExperienceMonthYearChange(index, 'endDate', e.target.value, 'month')}
                                >
                                  {['January', 'February', 'March', 'April', 'May', 'June',
                                    'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                                      <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                                <select
                                  name="endYear"
                                  className="p-2 rounded border border-black focus:outline-none w-1/2 focus:border-black"
                                  value={new Date(exp.endDate).getFullYear()}
                                  onChange={(e) => handleExperienceMonthYearChange(index, 'endDate', e.target.value, 'year')}
                                >
                                  {Array.from({ length: 15 }, (_, i) => 2024 - i).map(year => (
                                    <option key={year} value={year}>{year}</option>
                                  ))}
                                </select>
                              </div>
                            )}
                          </div>

                          <div className="flex justify-end">
                            <button
                              className=" text-white px-32 py-2 rounded mt-4 ml-auto"
                              onClick={() => handleSaveExperience(index)}
                            >
                              SAVE
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
              <section className="h-full profile_right_section -mr-12 flex-1">
                <RequestBox />
              </section>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default EditProfile;