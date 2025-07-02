import { useEffect,useState } from "react";
function Socialmedia({ setPage, whiteBg = false }) {
          const [slide,setSlide]=useState([])
      const images = [
          { src: `${import.meta.env.BASE_URL}Socialmedia/socialmedia1.png`, alt: 'A vibrant orange background with text "Slide 1"' },
          { src: `${import.meta.env.BASE_URL}Socialmedia/socialmedia2.png`, alt: 'A bright green background with text "Slide 2"' },
          { src: `${import.meta.env.BASE_URL}Socialmedia/socialmedia3.png`, alt: 'A deep blue background with text "Slide 3"' },
          { src: `${import.meta.env.BASE_URL}Socialmedia/socialmedia4.png`, alt: 'A vivid pink background with text "Slide 4"' },
          { src: `${import.meta.env.BASE_URL}Socialmedia/socialmedia5.png`, alt: 'A vivid pink background with text "Slide 5"' },
          { src: `${import.meta.env.BASE_URL}Socialmedia/socialmedia6.png`, alt: 'A vivid pink background with text "Slide 6"' }
        ];
        useEffect(()=>{
          const time = setInterval(()=>{
              setSlide((prevslide)=>(prevslide+1)%images.length)
          },3000)
        
        return ()=>{
          clearInterval(time)
        }
      },[])
  const project = {
    title: "Social Media Web App",
    image: "https://placehold.co/600x400/1F2937/F9FAFB?text=Social+Media+App", // Placeholder image, updated for dark theme
    shortDescription: "A full-stack social media web application enabling users to create profiles, post images, like, comment, search for users, and engage in real-time chat.",
    detailLink: "https://github.com/Sumitgupta54856171/Social-media-web_app.git", // Link to your GitHub repository
    
    keyFeatures: [
      "User Authentication: Secure signup and login for individual user accounts.",
      "Profile Management: Users can create and edit profiles, view their posts, and see follower/following counts.",
      "Post Creation & Interaction: Ability to upload images, add captions, like posts, and leave comments.",
      "User Search: Functionality to search for other users and view their profiles.",
      "Real-time Chat: Integrated chat feature for direct messaging between users.",
      "Responsive UI: Designed for seamless experience across various devices.",
    ],
    technologiesUsed: [
      "React.js: For building a dynamic and interactive user interface.",
      "Node.js & Express.js: For the robust and scalable backend API.",
      "MongoDB: NoSQL database for flexible data storage (users, posts, chats).",
      "Socket.IO: For real-time, bidirectional communication (e.g., chat functionality).",
      "JWT (JSON Web Tokens): For secure user authentication and API protection.",
      "Cloudinary: For cloud-based image storage and management.",
      "Tailwind CSS: For rapid and responsive UI styling.",
    ],
    challengesAndLearnings: [
      "Implementing real-time communication with Socket.IO for chat features.",
      "Handling image uploads and storage efficiently using Cloudinary.",
      "Designing and managing complex data relationships in MongoDB for social interactions (likes, comments, followers).",
      "Optimizing performance for a high volume of posts and user interactions.",
      "Ensuring cross-browser compatibility and responsive design for all UI components.",
    ],
    outcome: "This social media web application successfully demonstrates the development of a feature-rich platform with real-time capabilities. It showcases expertise in full-stack development, including user authentication, content management, social interactions, and real-time communication, providing a solid foundation for a modern social networking service.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-inter text-gray-200">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full my-8 transform transition-all duration-500 hover:scale-105 border border-blue-700">
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

export default Socialmedia;