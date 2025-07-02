import {DiGithubFull} from "react-icons/di";
import {LinkedinIcon } from "lucide-react";
import TechnicalSkillsList from "./TechnicalSkillslist";

function Profile(){
    return(
        <>
        
        <div className="container mx-auto py-20 grid grid-cols-[100px_500px] text-white/100 justify-center align-middle items-center">
            <div><p className="fixed top-30"><img src="" alt="self image" /></p></div>
            <div className="h-full w-300 m-10">
                 <div className="w-full p-6  text-white rounded-lg m-2">
                <div className="gat-4 relative">
                <h1 className="text-8xl font-bold ">Sumit Gupta</h1>
                <p className="text-4xl text-slate-400">Full Stack Developer</p>
                <h1  className="text-3xl font-median ">Location</h1>
                <p className=" text-md relative left-8">Satna(MadhyaPradesh)</p>
                <p className="text-md relative left-8">date of birth : 2/10/2003</p>
                <h1 className="text-3xl font-medium">Contact</h1>
                <p className="text-md relative left-8">Email : sg54856171@gmail.com</p>
                <p className="text-md relative left-8">Phone:+91-6260905418</p>
                   <h1  className="text-3xl font-medium">Education</h1>
                      <p className="text-md relative left-8">B.Tech/B.E. in Computer Science </p>
                       <p className="text-md relative left-8"> AKS University, Satna </p>
                </div>
                <div className="w-30 h-15 p-6  text-white rounded-lg m-2 bg-slate-700 justify-items-center items-center flex flex-row justify-center">
                <span className=" text-white text-sm flex flex-row gap-2 ">
                  <a href="https://github.com/Sumitgupta54856171" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/m_outlined/512/github.png"className="size-8"></img></a>
                  <a href="https://www.linkedin.com/in/sumitgupta54856171/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios11/512/linkedin.png" className="size-8"></img></a>
                </span>
                </div>
                <div className="w-full p-6  text-white rounded-lg ">
                <p className="font-medium text-md">Proactive and results-driven Full Stack Developer with strong leadership and problem-solving skills. Skilled in frontend and backend development, cloud infrastructure, and DevOps practices. Hands-on experience with the complete software development lifecycle, delivering scalable, secure, and high-performance web and mobile applications. </p>
                </div>
                <section>
                    <h1 className="text-6xl font-bold my-4 text-white">Work Experience</h1>
                    <ul className="list-disc list-inside space-y-6 text-sm text-white-700 text-md relative left-8">
                        <li>
                        Contributed to the UI/UX design and implementation of a social media platform, which resulted in a 20% improvement in user engagement and 30% reduction in load times. Also, built GraphQL APIs to effectively manage backend data and server resources.
                        </li>
                        <li>
                        Integrated AI tools into design and backend development workflows, leveraging generative AI models during RESTful and GraphQL API implementations to enhance development efficiency.
                        </li>
                        <li>
                        Developed scalable server solutions to handle high traffic loads. Additionally, created a comprehensive Design System that unified brand consistency across multiple platforms, improving design consistency by 40%.
                        </li>
                        <li>
                        Played a key role in a cross-functional team that launched a new product line, which contributed to a 15% increase in overall company revenue.
                        </li>
                    </ul>
                </section>
                <TechnicalSkillsList/>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Profile;