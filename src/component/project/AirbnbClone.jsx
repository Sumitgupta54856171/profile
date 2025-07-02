import { useEffect,useState } from "react";

function AirbnbClone({ setPage, whiteBg = false }) {
     
            const [slide,setSlide]=useState([])
      const images = [
          { src:  import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-02.png', alt: 'A vibrant orange background with text "Slide 1"' },
          { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-03.png', alt: 'A bright green background with text "Slide 2"' },
          { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-03_1.png', alt: 'A deep blue background with text "Slide 3"' },
          { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-28.png', alt: 'A vivid pink background with text "Slide 4"' },
          { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-28_1.png', alt: 'A vivid pink background with text "Slide 5"' },
          { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-29.png', alt: 'A vivid pink background with text "Slide 6"' }
        ];
        useEffect(()=>{
          const time = setInterval(()=>{
              setSlide((prevslide)=>(prevslide+1)%images.length)
          },3000)
        
        return ()=>{
          clearInterval(time)
        }
      })
  const project = {
    title: "House Booking Back-end",
    image: "https://placehold.co/600x400/1F2937/F9FAFB?text=House+Booking+System", // Placeholder image, updated for dark theme
    shortDescription: "This is a robust back-end project for a house booking system, designed to efficiently manage property listings, user interactions, and secure transactions.",
    detailLink: "https://github.com/Sumitgupta54856171/Back-end-.git", // Link to your GitHub repository
    
    keyFeatures: [
      "User Authentication: Secure login and signup functionalities for different user roles (e.g., users, admins).",
      "Property Listings Management: CRUD operations for house listings, including details like location, price, and availability.",
      "Booking System: Functionality for users to book houses for specific dates, with availability checks.",
      "Payment Gateway Integration: Secure integration with Razorpay for handling online payments.",
      "Role-Based Access Control: Different access levels for users and administrators to manage the system.",
    ],
    technologiesUsed: [
      "Node.js: For building scalable server-side applications.",
      "Express.js: A fast, unopinionated, minimalist web framework for Node.js.",
      "MongoDB: A NoSQL database for flexible and scalable data storage.",
      "Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.",
      "JWT (JSON Web Tokens): For secure API authentication and authorization.",
      "Razorpay API: For seamless payment processing.",
    ],
    challengesAndLearnings: [
      "Implementing secure user authentication and authorization mechanisms.",
      "Designing a robust database schema for various entities like users, houses, and bookings.",
      "Integrating a third-party payment gateway (Razorpay) and handling callbacks.",
      "Ensuring data validation and error handling across all API endpoints.",
      "Managing asynchronous operations and promise-based logic effectively.",
    ],
    outcome: "The successful development of this back-end system provides a solid foundation for a comprehensive house booking platform. It demonstrates proficiency in building secure, scalable, and maintainable web applications, with a clear focus on real-world functionality and payment integration. This project is ready to be integrated with a front-end application.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-950 to-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-inter text-gray-200">
      <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full my-8 transform transition-all duration-500 hover:scale-105 border border-slate-900">
        {/* Project Header and Image */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-200 ">
          
            <div
              className="flex shadow-x1/30 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {images.map((image, index) => (
          
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            </div>
          </div>
        {/* Short Description */}
        <div className={`p-8 pb-4 {whiteBg ? 'bg-white text-black' : ''}`}>
          <p className="text-xl ${whiteBg ? 'text-black' : 'text-gray-300'} mb-6 leading-relaxed">
            {project.shortDescription}
          </p>
          <a
            href={project.detailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 ${whiteBg ? 'text-black' : 'text-white'} font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition transform hover:-translate-y-1 active:scale-95 duration-200"
          >
            View Project on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Detailed Sections */}
        <div className="p-8 pt-4 space-y-10">
          {/* Key Features */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600">
            <h2 className="text-2xl font-bold ${whiteBg ? 'text-black' : 'text-white'} mb-4">Key Features</h2>
            <ul className="list-disc list-inside ${whiteBg ? 'text-black' : 'text-gray-300'} space-y-2">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600">
            <h2 className="text-2xl font-bold ${whiteBg ? 'text-black' : 'text-white'} mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside ${whiteBg ? 'text-black' : 'text-gray-300'} space-y-2">
              {project.technologiesUsed.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges and Learnings */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600">
            <h2 className="text-2xl font-bold ${whiteBg ? 'text-black' : 'text-white'} mb-4">Challenges and Learnings</h2>
            <ul className="list-disc list-inside ${whiteBg ? 'text-black' : 'text-gray-300'} space-y-2">
              {project.challengesAndLearnings.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">&bull;</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600">
            <h2 className="text-2xl font-bold ${whiteBg ? 'text-black' : 'text-white'} mb-4">Outcome</h2>
            <p className="text-lg ${whiteBg ? 'text-black' : 'text-gray-300'} leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirbnbClone;
