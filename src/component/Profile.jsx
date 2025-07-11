import { motion } from 'framer-motion';
import TechnicalSkillsList from "./TechnicalSkillslist";
import AnimatedBackground from './AnimatedBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function Profile(){
    return(
        <>
        <AnimatedBackground />
        <motion.div 
          className="container mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 justify-center items-start text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        > 
          {/* Profile Image */}
          <motion.div className="flex flex-col items-center md:items-start" variants={itemVariants}>
            <img src="" alt="self image" className="w-28 h-28 rounded-full shadow-md border-2 border-gray-700 bg-gray-800 object-cover mb-4" />
          </motion.div>
          {/* Profile Content */}
          <motion.div className="w-full max-w-3xl space-y-6" variants={containerVariants}>
            {/* Header Card */}
            <motion.div className="w-full p-6 rounded-lg m-2 shadow-md border bg-slate-800/50 backdrop-blur-sm border-slate-700" variants={itemVariants}>
              <div className="gap-4 relative space-y-2">
                <h1 className="text-5xl font-bold">Sumit Gupta</h1>
                <p className="text-2xl text-slate-400">Full Stack Developer</p>
                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                  <div>
                    <h2 className="text-xl font-semibold">Location</h2>
                    <p className="text-md ml-2">Satna (Madhya Pradesh)</p>
                    <p className="text-md ml-2">Date of Birth: 2/10/2003</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p className="text-md ml-2">Email: <a href="mailto:sg54856171@gmail.com" className="underline hover:text-blue-400">sg54856171@gmail.com</a></p>
                    <p className="text-md ml-2">Phone: <a href="tel:+916260905418" className="underline hover:text-blue-400">+91-6260905418</a></p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Education</h2>
                    <p className="text-md ml-2">B.Tech/B.E. in Computer Science</p>
                    <p className="text-md ml-2">AKS University, Satna</p>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Social Links Card */}
            <motion.div className="flex flex-row gap-4 items-center p-4 rounded-lg shadow border bg-slate-800/50 backdrop-blur-sm border-slate-700" variants={itemVariants}>
              <a href="https://github.com/Sumitgupta54856171" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="https://img.icons8.com/m_outlined/512/github.png" alt="GitHub" className="w-8 h-8" /></a>
              <a href="https://www.linkedin.com/in/sumitgupta54856171/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="https://img.icons8.com/ios11/512/linkedin.png" alt="LinkedIn" className="w-8 h-8" /></a>
            </motion.div>
            {/* Bio Card */}
            <motion.div className="w-full p-6 rounded-lg shadow border bg-slate-800/50 backdrop-blur-sm border-slate-700" variants={itemVariants}>
              <p className="font-medium text-md">Proactive and results-driven Full Stack Developer with strong leadership and problem-solving skills. Skilled in frontend and backend development, cloud infrastructure, and DevOps practices. Hands-on experience with the complete software development lifecycle, delivering scalable, secure, and high-performance web and mobile applications.</p>
            </motion.div>
            {/* Work Experience Section */}
            <motion.section variants={itemVariants}>
              <h1 className="text-3xl font-bold my-4 text-white">Work Experience</h1>
              <ul className="list-disc list-inside space-y-4 text-md ml-4 text-slate-300">
                <li>
                  Contributed to the UI/UX design and implementation of a social media platform, resulting in a 20% improvement in user engagement and 30% reduction in load times. Built GraphQL APIs to effectively manage backend data and server resources.
                </li>
                <li>
                  Integrated AI tools into design and backend workflows, leveraging generative AI models during RESTful and GraphQL API implementations to enhance development efficiency.
                </li>
                <li>
                  Developed scalable server solutions for high traffic loads. Created a comprehensive Design System that unified brand consistency across multiple platforms, improving design consistency by 40%.
                </li>
                <li>
                  Played a key role in a cross-functional team that launched a new product line, contributing to a 15% increase in overall company revenue.
                </li>
              </ul>
            </motion.section>
            <motion.div variants={itemVariants}>
              <TechnicalSkillsList />
            </motion.div>
          </motion.div>
        </motion.div>
        </>
    )
}
export default Profile;