import { useState,useEffect } from "react";
function Com() {
              const [slide,setSlide]=useState([])
        const images = [
            { src:  import.meta.env.BASE_URL +'/Nevstore/N1.png', alt: 'A vibrant orange background with text "Slide 1"' },
            { src: import.meta.env.BASE_URL +'/Nevstore/N2.png', alt: 'A bright green background with text "Slide 2"' },
            { src: import.meta.env.BASE_URL +'/Nevstore/N3.png', alt: 'A deep blue background with text "Slide 3"' },
            { src: import.meta.env.BASE_URL +'/Nevstore/N4.png', alt: 'A vivid pink background with text "Slide 4"' },
            { src: import.meta.env.BASE_URL +'/Nevstore/N5.png', alt: 'A vivid pink background with text "Slide 5"' },
            { src: import.meta.env.BASE_URL +'/Nevstore/N6.png', alt: 'A vivid pink background with text "Slide 6"' }
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
    title: "E-commerce Product Management Platform (Amazon-like)",
    image: "https://placehold.co/600x400/1F2937/F9FAFB?text=Amazon-like+E-commerce", // Placeholder image, updated for Amazon-like theme
    shortDescription: "A comprehensive, full-stack e-commerce platform inspired by Amazon's core functionalities, designed for robust product management, seamless user interaction, and extensive administrative control. Features include dynamic product listings, detailed product views, secure authentication, shopping cart, order processing, and a powerful admin dashboard.",
    detailLink: "https://github.com/Sumitgupta54856171/full_stack_app.git", // Link to your GitHub repository
    
    keyFeatures: [
      "Dynamic Product Catalog & Listing: Displays a vast array of products with high-quality images, detailed descriptions, pricing, and availability.",
      "Advanced Search & Filtering: Enables users to easily find products through keyword search, category filters, and sorting options.",
      "Detailed Product Pages: Provides comprehensive product information, customer reviews, related items, and an intuitive 'Add to Cart' experience.",
      "Secure User Authentication & Authorization: Implemented robust login, signup, and password recovery. Supports distinct user roles (customer, admin) with appropriate access controls.",
      "Shopping Cart & Checkout Flow: A persistent shopping cart for managing selections, leading to a secure and multi-step checkout process.",
      "Order Management System: Comprehensive functionality for users to track their orders and for administrators to process, update, and manage all incoming orders.",
      "Administrative Dashboard: A powerful, centralized panel for full control over the e-commerce ecosystem.",
      "Category Management: Administrators can create, update, and delete product categories to organize the catalog efficiently.",
      "Product Management: Full CRUD operations for products, including bulk uploads, managing inventory, pricing, and multiple image uploads.",
      "User & Review Management: Tools for administrators to oversee user accounts, moderate product reviews, and ensure platform integrity.",
      "Scalable Architecture: Designed with modular components for both frontend and backend to support future growth and feature additions.",
    ],
    technologiesUsed: [
      "React.js: For building a highly responsive, dynamic, and component-based user interface, including interactive product grids, detailed views, and the administrative dashboard.",
      "Node.js & Express.js: Powering the robust backend API, handling business logic, routing, and serving data efficiently.",
      "MongoDB: A flexible NoSQL database chosen for its scalability and ability to handle diverse e-commerce data (products, users, orders, categories, reviews).",
      "Mongoose: An Object Data Modeling (ODM) library for Node.js, facilitating efficient and structured interactions with MongoDB.",
      "Axios: Utilized for making asynchronous HTTP requests from the React frontend, ensuring smooth data fetching and updates.",
      "Tailwind CSS: Employed for rapid and responsive UI styling, enabling a modern, clean, and adaptive design across all devices.",
      "JWT (JSON Web Tokens): For implementing secure, stateless user authentication and authorization, protecting API routes and sensitive data.",
      "Cloud Storage (e.g., Cloudinary/AWS S3 - inferred): For efficient and scalable storage and delivery of product images and other media assets.",
      "Payment Gateway Integration (e.g., Stripe/Razorpay - inferred): For handling secure online transactions and managing payment flows.",
    ],
    challengesAndLearnings: [
      "Designing a highly scalable and normalized database schema to manage complex e-commerce relationships (products, categories, users, orders, reviews, payments).",
      "Implementing robust and secure user authentication and authorization, including role-based access control for administrative functions.",
      "Developing a comprehensive and intuitive administrative dashboard capable of managing a large volume of data and various entities.",
      "Optimizing performance for dynamic product listings and search functionalities with potentially large datasets.",
      "Handling secure file uploads (product images) and integrating with cloud storage solutions for efficient media management.",
      "Ensuring transactional integrity and error handling throughout the shopping cart and checkout processes.",
      "Managing global state effectively in a complex React application to provide a seamless user experience.",
    ],
    outcome: "This project successfully delivers a fully functional and scalable e-commerce platform, mirroring key aspects of leading online marketplaces. It demonstrates advanced full-stack development capabilities, including complex data modeling, secure payment integration, comprehensive administrative controls, and a focus on user experience. This platform provides a strong foundation for any online retail venture and highlights proficiency in building robust, production-ready web applications.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-inter text-gray-200">
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full my-8 transform transition-all duration-500 hover:scale-105 border border-blue-700">
        {/* Project Header and Image */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-200 row-span-5">
          
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

export default Com;