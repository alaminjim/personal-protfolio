import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef } from "react"; // Import useRef
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"; // Import slider icons

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectSwiperRefs = useRef({}); // Ref to store Swiper instances for each project
  const popupSwiperRef = useRef(null); // Ref for the popup Swiper

  const projects = [
    // ... (your projects array remains the same) ...
    {
      title: "Simple Portfolio",
      description:
        "Present your professional journey with this sleek and responsive portfolio, developed using React.js. This portfolio offers a clear and engaging presentation of your skills and expertise, highlighting your projects, testimonials, and contact details for easy communication.",
      tags: ["React JS", "Tailwind", "Swiper", "Lucide-react", "lottie-react"],
      featured: true,
      images: [
        "/public/images/project7/img1.png",
        "/public/images/project7/img2.png",
        "/public/images/project7/img3.png",
        "/public/images/project7/img4.png",
      ],
      sourceCode: "https://github.com/alaminjim/simple-info-aboutMe",
      liveLink: {
        url: "https://simple-protfolio-7c400f.netlify.app/",
        text: "Live Link",
      },
    },
    {
      title: "Solo-Sphere",
      description:
        "Solo Sphere is a job-centric platform built to streamline the process of posting and applying for jobs with real-time deadline tracking. Developed using React.js and Firebase, it allows authenticated users to post job opportunities, apply to existing ones, and view recent job activity. Key features include secure login, query-based job filtering, countdown-based deadlines, and a clean, responsive UI. Ideal for both job seekers and recruiters, Solo Sphere ensures an efficient and intuitive experience for managing career opportunities.",
      tags: [
        "React JS",
        "Tailwind",
        "Swiper",
        "React-hot-toast",
        "React-router",
        "Express js",
        "Node js",
        "MongoDB",
        "Dot env",
      ],
      featured: true,
      images: [
        "/public/images/project-10/img-1.png",
        "/public/images/project-10/img-2.png",
        "/public/images/project-10/img-3.png",
        "/public/images/project-10/img-4.png",
        "/public/images/project-10/img-5.png",
        "/public/images/project-10/img-6.png",
      ],
      sourceCodes: [
        {
          type: "Client",
          url: "https://github.com/alaminjim/solo-sphere/tree/main/client",
        },
        {
          type: "Server",
          url: "https://github.com/alaminjim/solo-sphere/tree/main/server",
        },
      ],
      liveLink: {
        url: "https://solo-sphere-434b4c.netlify.app/",
        text: "Live Link",
      },
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handlePrevSlide = (index) => {
    if (projectSwiperRefs.current[index]) {
      projectSwiperRefs.current[index].swiper.slidePrev();
    }
  };

  const handleNextSlide = (index) => {
    if (projectSwiperRefs.current[index]) {
      projectSwiperRefs.current[index].swiper.slideNext();
    }
  };

  const handlePopupPrevSlide = () => {
    if (popupSwiperRef.current) {
      popupSwiperRef.current.swiper.slidePrev();
    }
  };

  const handlePopupNextSlide = () => {
    if (popupSwiperRef.current) {
      popupSwiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="pt-40 pb-10 px-10 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-[2px] bg-gray-900/80 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
          >
            <div className="relative overflow-hidden h-[285px] bg-black">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSwiper={(swiper) =>
                  (projectSwiperRefs.current[index] = { swiper })
                }
                className="h-full"
              >
                {project.images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex} className="h-full">
                    <img
                      src={img}
                      alt={`${project.title} - ${imgIndex + 1}`}
                      className="w-full h-full object-contain rounded-md bg-black"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {project.images.length > 1 && (
                <div className="absolute bottom-5 left-0 w-full flex justify-between items-center px-4 z-10">
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevSlide(index);
                    }}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextSlide(index);
                    }}
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            <Card
              className="p-5"
              style={{
                background:
                  "linear-gradient(to bottom right, #09001d, #2b012e)",
              }}
              onClick={() => handleProjectClick(project)}
            >
              <MacOsButtons />
              <CardHeader>
                <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                  Featured Project
                </div>
                <CardTitle className="text-slate-100 text-3xl font-bold">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="mt-4 h-[400px] flex flex-col justify-between overflow-hidden">
                <div>
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 max-h-[100px] overflow-hidden">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm cursor-pointer font-medium rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 transition-all hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex pt-5 justify-between items-center flex-wrap gap-3">
                  {project.liveLink?.url && (
                    <a
                      href={project.liveLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      {project.liveLink.text || "Live Link"}
                    </a>
                  )}
                  {project.sourceCodes && Array.isArray(project.sourceCodes) ? (
                    <div className="flex gap-4 flex-wrap">
                      {project.sourceCodes.map((code, i) => (
                        <a
                          key={i}
                          href={code.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                        >
                          {code.type} Code
                        </a>
                      ))}
                    </div>
                  ) : project.sourceCode ? (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                    >
                      Source Code
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-10 rounded-xl w-4/5 max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              onClick={handleClosePopup}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-4xl font-bold text-slate-100 mb-6">
              {selectedProject.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm cursor-pointer font-medium rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 transition-all hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative h-[400px] bg-black">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className="h-full"
                onSwiper={(swiper) => (popupSwiperRef.current = { swiper })}
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <img
                      src={img}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg bg-black"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {selectedProject.images.length > 1 && (
                <div className="absolute top-1/2 left-0 w-full flex justify-between items-center transform -translate-y-1/2 px-4 z-10">
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={handlePopupPrevSlide}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={handlePopupNextSlide}
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-6">
              {selectedProject.liveLink?.url && (
                <a
                  href={selectedProject.liveLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 p-2 hover:text-blue-300 font-semibold transition-colors rounded-md border border-blue-400"
                >
                  {selectedProject.liveLink.text}
                </a>
              )}
              {selectedProject.sourceCodes ? (
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.sourceCodes.map((code, i) => (
                    <a
                      key={i}
                      href={code.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 p-2 hover:text-green-300 font-semibold transition-colors rounded-md border border-green-400"
                    >
                      {code.type} Code
                    </a>
                  ))}
                </div>
              ) : (
                selectedProject.sourceCode && (
                  <a
                    href={selectedProject.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 p-2 hover:text-green-300 font-semibold transition-colors rounded-md border border-green-400"
                  >
                    Source Code
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
