import { useState,useEffect } from "react";

function Stockmarke() {
            const [slide,setSlide]=useState([])
      const images = [
          { src: '../public/stockmarket/stockmarket1.png', alt: 'A vibrant orange background with text "Slide 1"' },
          { src: '../public/stockmarket/stockmarket2.png', alt: 'A bright green background with text "Slide 2"' },
          { src: '../public/stockmarket/stockmarket3.png', alt: 'A deep blue background with text "Slide 3"' },
          { src: '../public/stockmarket/stockmarket4.png', alt: 'A vivid pink background with text "Slide 4"' }
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
    title: "Stock Market Web App",
    image: "https://placehold.co/600x400/1F2937/F9FAFB?text=Stock+Market+App", // Placeholder image, updated for dark theme
    shortDescription: "A dynamic web application providing historical stock data visualization through candlestick charts, real-time market insights, and interactive features like user authentication and integrated chat.",
    detailLink: "https://github.com/Sumitgupta54856171/stockmarket-web_app.git", // Link to your GitHub repository
    
    keyFeatures: [
      "Historical Stock Candlestick Charts: Visualize daily market data for various stock symbols (e.g., META, AAPL).",
      "Real-time Market Data Integration: Fetches daily market data via Polygon.io REST API.",
      "Custom Date Range Selection: Users can select specific start and end dates to view historical data.",
      "Key Financial Metrics Display: Shows latest close, daily change, percentage change, high, and trading volume.",
      "User Authentication: Secure login and signup functionalities for personalized access.",
      "Integrated Chat Feature: Allows users to communicate within the application.",
      "Responsive UI & Intuitive Navigation: Designed for seamless user experience across devices with a clear navigation bar.",
    ],
    technologiesUsed: [
      "Next.js: For building the interactive and responsive user interface.",
      "Next.js: For the backend server to handle API requests and serve data.",
      "Typescript: For type safety and better code quality.",
      "MongoDB: Database for storing user information and potentially other application data.",
      "Polygon.io REST API: For fetching comprehensive historical stock market data.",
      "Chart.js (or similar charting library): For rendering dynamic candlestick charts.",
      "Tailwind CSS: For streamlined and responsive styling.",
      "JWT (JSON Web Tokens): For secure user authentication.",
      "Socket.IO (Likely): For the integrated real-time chat functionality.",
    ],
    challengesAndLearnings: [
      "Integrating and efficiently consuming external financial data APIs (e.g., Polygon.io).",
      "Implementing complex data visualization for candlestick charts, handling large datasets and date ranges.",
      "Ensuring secure user authentication and session management in a real-time environment.",
      "Developing and scaling the real-time chat functionality.",
      "Managing asynchronous data fetching and state updates for dynamic UI rendering.",
    ],
    outcome: "This project successfully delivers a functional stock market analysis tool with interactive data visualization and user engagement features. It showcases strong capabilities in API integration, complex data handling, real-time communication, and building a user-friendly financial application.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-inter text-gray-200">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full my-8 transform transition-all duration-500 hover:scale-105 border border-blue-700">
        {/* Project Header and Image */}
        <div className="relative  max-w-4xl mx-auto rounded-xl shadow-2xl border border-gray-200 overflow-hidden row-span-5">
          
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
      
        </div>

        {/* Short Description */}
        <div className="p-8 pb-4">
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {project.shortDescription}
          </p>
          <a
            href={project.detailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition transform hover:-translate-y-1 active:scale-95 duration-200"
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
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
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
            <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
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
            <h2 className="text-2xl font-bold text-white mb-4">Challenges and Learnings</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
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
            <h2 className="text-2xl font-bold text-white mb-4">Outcome</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stockmarke;
