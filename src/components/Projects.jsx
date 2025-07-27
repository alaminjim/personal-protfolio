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
      title: "Expenzo",
      description:
        "Expenzo is your intelligent, full-stack financial companion, designed to simplify your financial life. Track income and expenses from all your accounts with AI-powered precision, leveraging the power of the Gemini API for smart transaction categorization and receipt scanning. Manage recurring transactions effortlessly, and receive proactive email notifications (via Resend) to ensure your budget stays on track. Gain deeper insights into your financial journey with interactive charts and dashboards, providing a clear view of both daily spending and long-term financial health. Experience personalized analysis of your spending habits with insightful, AI-generated monthly reports. Expenzo is built on a modern tech stack, featuring Next.js and Shadcn UI for a responsive and intuitive user interface, Supabase for secure and scalable database management, and Clerk for seamless and secure authentication.",
      tags: [
        "Next JS",
        "Supabase",
        "Tailwind",
        "Prisma",
        "Inngest",
        "ArcJet",
        "Shadcn UI",
      ],
      featured: true,
      images: [
        "/images/project2/img1.png",
        "/images/project2/img2.png",
        "/images/project2/img3.png",
        "/images/project2/img4.png",
        "/images/project2/img5.png",
        "/images/project2/img6.png",
        "/images/project2/img7.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/ai-finance-tracker",
      liveLink: {
        url: "https://ai-finance-tracker-ten.vercel.app/",
        text: "Live Link",
      },
    },
    {
      title: "JobXplore",
      description:
        "JobXplore empowers you to find or hire freelance talent with ease. This full-stack platform allows clients to post detailed jobs across various categories, while freelancers can browse, apply, and place competitive bids. Refine your search with category filters, keyword search, and deadline sorting, or reset to explore all available opportunities. Manage your job postings and track your bids and bid requests from a centralized dashboard. JobXplore delivers a seamless user experience, leveraging React.js and Tailwind CSS for a modern and responsive interface, Firebase for secure user authentication, and a robust backend powered by MongoDB, Express.js, and Node.js.",
      tags: [
        "React JS",
        "Mongodb",
        "Tailwind",
        "Node JS",
        "Express JS",
        "Firebase",
      ],
      featured: true,
      images: [
        "/images/project3/img1.png",
        "/images/project3/img2.png",
        "/images/project3/img3.png",
        "/images/project3/img4.png",
        "/images/project3/img5.png",
        "/images/project3/img6.png",
        "/images/project3/img7.png",
        "/images/project3/img8.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/JobXplore",
      liveLink: { url: "https://do-bro.web.app/", text: "Live Link" },
    },
    {
      title: "StyloCart",
      description:
        "A scalable full-stack fashion e-commerce platform built with the MERN stack, offering secure JWT-based authentication with role-based access control (user/admin), a fully functional shopping cart, coupon system, and Stripe-powered checkout. The app includes an admin dashboard for managing products, users, and orders, along with order tracking for customers. MongoDB and Redis are used for efficient and scalable data handling, while the responsive frontend is built with React and styled using Tailwind CSS.",
      tags: [
        "React JS",
        "Mongodb",
        "Redis",
        "Stripe",
        "Robust",
        "JWT",
        "Node JS",
        "Express JS",
      ],
      featured: true,
      images: [
        "/images/project13/img1 (1).png",
        "/images/project13/img1 (2).png",
        "/images/project13/img1 (3).png",
        "/images/project13/img1 (4).png",
        "/images/project13/img1 (5).png",
        "/images/project13/img1 (6).png",
        "/images/project13/img1 (7).png",
        "/images/project13/img1 (8).png",
        "/images/project13/img1 (9).png",
        "/images/project13/img1 (10).png",
      ],
      sourceCode: "https://github.com/Fahimfylo/mern-ecommerce",
      liveLink: { url: "https://mern-ecommerce-p250.onrender.com/", text: "Live Link" },
    },
    {
      title: "Shopex",
      description:
        "Discover a modern and intuitive online shopping experience with Shopex. This front-end e-commerce platform provides a visually appealing interface with customizable light and dark mode themes. Explore a diverse catalog of products, categorized for easy navigation, including Women's Wear, Kid's Wear, Men's Wear, and Trending Products. Each product card presents key details, and a convenient 'See Full' button opens a detailed pop-up, showcasing ratings, available sizes, and more. A streamlined 'Order Now' feature facilitates quick and easy order placement through a dedicated pop-up.",
      tags: ["React JS", "Tailwind", "AOS", "Framer Motion"],
      featured: true,
      images: [
        "/images/project1/img1.png",
        "/images/project1/img2.png",
        "/images/project1/img3.png",
        "/images/project1/img4.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/e-commerce-shop",
      liveLink: { url: "https://shopexorgs.netlify.app/", text: "Live Link" },
    },
    {
      title: "Skyloom",
      description:
        "Skyloom provides a dynamic and intuitive weather experience, offering accurate current weather and forecast information. Gain a clear understanding of upcoming temperature changes with an interactive 24-hour graphical display. Easily search weather conditions for any city worldwide. Skyloom utilizes the efficiency of TanStack Query to implement advanced features like a searchable history and the ability to add cities to your favorites through optimized mutations. Experience a seamless user experience across all devices with a fully responsive design, and personalize your view with light and dark mode options.",
      tags: [
        "React JS",
        "Typescript",
        "Tailwind",
        "Shadcn UI",
        "Tanstack Query",
        "Openweather API",
      ],
      featured: true,
      images: [
        "/images/project8/img1.png",
        "/images/project8/img2.png",
        "/images/project8/img3.png",
        "/images/project8/img4.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/skyloom",
      liveLink: {
        url: "https://skyloom-weather-web.netlify.app/",
        text: "Live Link",
      },
    },
    {
      title: "Chatify",
      description:
        "Experience instant and engaging communication with Chatify, a fully responsive real-time chat application. Connect with other users, send and receive messages effortlessly, and enjoy a seamless chat experience across all devices. Secure signup and login functionality ensures user authentication, leading to a dynamic home page displaying active conversations and online users. Personalize your experience by updating your profile on the dedicated profile page.",
      tags: [
        "React JS",
        "Tailwind",
        "Socket.io",
        "Zustand",
        "Express JS",
        "Node JS",
        "JWT",
      ],
      featured: true,
      images: [
        "/images/project6/img1.png",
        "/images/project6/img2.png",
        "/images/project6/img3.png",
        "/images/project6/img4.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/chat-app",
      liveLink: {
        url: "https://chat-app-aagg.onrender.com/",
        text: "Live Link",
      },
    },
    {
      title: "North Burg",
      description:
        "Enjoy the convenience of online restaurant ordering with this fully responsive and visually appealing e-commerce website. Authenticate securely with Firebase, explore a wide range of food categories, and effortlessly add or remove items from your cart. Securely process payments through Stripe and enjoy a smooth checkout experience. The robust backend, powered by MongoDB, Node.js, and Express.js, ensures seamless data management. Designed with React.js, Tailwind CSS, and DaisyUI, the platform delivers an intuitive and attractive user interface. Administrators gain access to a dedicated Admin Dashboard, enabling comprehensive control over inventory, product updates, and overall site management.",
      tags: [
        "React JS",
        "Node JS",
        "Express JS",
        "Mongodb",
        "Daisy UI",
        "Tailwind",
        "Stripe",
      ],
      featured: true,
      images: [
        "/images/project9/img1.png",
        "/images/project9/img2.png",
        "/images/project9/img3.png",
        "/images/project9/img4.png",
        "/images/project9/img5.png",
        "/images/project9/img6.png",
        "/images/project9/img7.png",
        "/images/project9/img8.png",
        "/images/project9/img9.png",
        "/images/project9/img10.png",
        "/images/project9/img11.png",
        "/images/project9/img12.png",
        "/images/project9/img13.png",
        "/images/project9/img14.png",
        "/images/project9/img15.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/food-shop",
      liveLink: {
        url: "https://github.com/Fahimfylo/food-shop",
        text: "On Development",
      },
    },
    {
      title: "Axaro",
      description:
        "Develop and deploy a fully responsive, modern full-stack e-commerce application named Axaro, built for performance and scalability using Next.js and Tailwind CSS. Leverage a dynamic CMS for on-the-go product management, implement advanced cart functionalities with libraries like React Query, and integrate Stripe for secure, real-world payment processing. Craft a visually engaging experience with modern design and smooth animations, ensuring a seamless user journey across all devices..",
      tags: ["Next JS", "Tailwind", "Stripe", "Sanity.io", "Sanity API"],
      featured: true,
      images: [
        "/images/project12/img1.png",
        "/images/project12/img2.png",
        "/images/project12/img3.png",
        "/images/project12/img4.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/gadgets-stripe",
      liveLink: {
        url: "https://gadgest-stripe.netlify.app/",
        text: "Live Link",
      },
    },
    {
      title: "Shushimoto",
      description:
        "Shushimoto presents a great concept for a responsive and attractive landing page. This simple yet elegant sushi shop landing page has been developed with a focus on visual appeal, incorporating smooth animations using AOS and CSS.",
      tags: ["HTML", "CSS", "JavaScript", "AOS"],
      featured: true,
      images: [
        "/images/project11/img1.png",
        "/images/project11/img2.png",
        "/images/project11/img3.png",
        "/images/project11/img4.png",
        "/images/project11/img5.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/sushimoto",
      liveLink: { url: "https://sushimoto.netlify.app/", text: "Live Link" },
    },
    {
      title: "Coffee_co",
      description:
        "Coffee_co is a straightforward coffee shop landing page, implemented with React.js and DaisyUI for a responsive and visually consistent design. The site includes a mobile-friendly hamburger menu and functionality for users to curate their favorite coffee items, with the ability to add and delete selections.",
      tags: ["React JS", "Tailwind", "Daisy UI", "CSS"],
      featured: true,
      images: [
        "/images/project4/img1.png",
        "/images/project4/img2.png",
        "/images/project4/img3.png",
        "/images/project4/img4.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/Coffee_co",
      liveLink: {
        url: "https://resilient-pothos-e71cc0.netlify.app/",
        text: "Live Link",
      },
    },
    {
      title: "Byteblaze",
      description:
        "Byteblaze is a React.js-powered blogging website with a focus on user experience. It provides a clean, responsive UI with light and dark mode toggling, showcasing daily updated blog content and author information. Users can actively engage with the site by managing their favorite blog selections.",
      tags: ["React JS", "Tailwind", "Daisy UI", "Rehype-raw"],
      featured: true,
      images: [
        "/images/project5/img1.png",
        "/images/project5/img2.png",
        "/images/project5/img3.png",
        "/images/project5/img4.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/byteblaze",
      liveLink: {
        url: "https://dazzling-naiad-118016.netlify.app/",
        text: "Live Link",
      },
    },
    {
      title: "Taskey",
      description:
        "Taskey is a robust full-stack task management solution leveraging JWT for secure user authentication. Users can register or authenticate to manage daily tasks, categorized by status (All, Completed, Pending, Overdue) and priority (Low, Medium, High). Recharts provides interactive charts for data visualization and progress tracking.",
      tags: [
        "React JS",
        "Next JS",
        "JWT",
        "Express JS",
        "Node JS",
        "Axios",
        "Moment",
        "Framer Motion",
        "Tailwind",
      ],
      featured: true,
      images: [
        "/images/project10/img1.png",
        "/images/project10/img2.png",
        "/images/project10/img3.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/Taskey",
      liveLink: {
        url: "https://github.com/Fahimfylo/Taskey",
        text: "On Development",
      },
    },
    {
      title: "Simple Portfolio",
      description:
        "Present your professional journey with this sleek and responsive portfolio, developed using React.js. This portfolio offers a clear and engaging presentation of your skills and expertise, highlighting your projects, testimonials, and contact details for easy communication.",
      tags: ["React JS", "Tailwind", "Swiper", "Lucide-react"],
      featured: true,
      images: [
        "/images/project7/img1.png",
        "/images/project7/img2.png",
        "/images/project7/img3.png",
        "/images/project7/img4.png",
      ],
      sourceCode: "https://github.com/Fahimfylo/Simple-Portfolio",
      liveLink: {
        url: "https://silly-tiramisu-d73ecb.netlify.app/",
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
            <div className="relative overflow-hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className=""
                onSwiper={(swiper) =>
                  (projectSwiperRefs.current[index] = { swiper })
                }
              >
                {project.images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img
                      src={img}
                      alt={`${project.title} - ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {project.images.length > 1 && (
                <div className="absolute bottom-5 left-0 w-full flex justify-between items-center px-4 z-10">
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handlePrevSlide(index);
                    }}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
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

              <CardContent className="mt-4 sm:h-[400px] lg:h-[320px] flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    {project.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-3">
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
                <div className="flex pt-5 justify-between">
                  {project.liveLink && project.liveLink.url ? (
                    <a
                      href={project.liveLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      {project.liveLink.text}
                    </a>
                  ) : null}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    Source Code
                  </a>
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
                xmlns="http://www.w3.org/2000/svg"
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
            <div className="relative">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className="mb-8"
                onSwiper={(swiper) => (popupSwiperRef.current = { swiper })}
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
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
            <div className="flex justify-between">
              {selectedProject.liveLink && selectedProject.liveLink.url ? (
                <a
                  href={selectedProject.liveLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 p-2 hover:text-blue-300 font-semibold transition-colors rounded-md border border-blue-400"
                >
                  {selectedProject.liveLink.text}
                </a>
              ) : null}
              <a
                href={selectedProject.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 p-2 hover:text-green-300 font-semibold transition-colors rounded-md border border-green-400"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
