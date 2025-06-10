import {DiGithubFull} from "react-icons/di";
import TechnicalSkillsList from "./TechnicalSkillslist";
function Profile(){
    return(
        <>
        
        <div className="container mx-auto py-20 grid grid-cols-[100px_500px] text-white/100 justify-center align-middle items-center">
            <div><p className="fixed top-30"><img src="" alt="self image" /></p></div>
            <div className="h-full w-300 m-10">
                 <div className="w-full p-6  text-slate-950 rounded-lg m-2">
                <div className="gat-4">
                <h1 className="text-4xl font-bold">Sumit Gupta</h1>
                <p className="text-2xl font-medium">Full Stack Developer</p>
                <h1  className="text-3xl font-bold">Location</h1>
                <p className="font-medium">Satna(MadhyaPradesh)</p>
                <p className="font-medium">date of birth : 2/10/2003</p>
                <h1 className="text-3xl font-bold">Contact</h1>
                <p className="font-medium">Email : sg54856171@gmail.com</p>
                <p className="font-medium">Phone:+91-6260905418</p>
                   <h1  className="text-3xl font-bold">Education</h1>
                      <p className="font-medium">B.Tech/B.E. in Computer Science </p>
                       <p className="font-medium"> AKS University, Satna </p>
                </div>
                <div className="w-full p-6  text-slate-950 rounded-lg m-2">
                <p>
                  <a href="" className="flex flex-row gap-1 w-30 h-10  justify-center hover:text-white/70 hover:bg-slate-950/25 hover:border hover:rounded-2xl hover:px-2" ><DiGithubFull size={50} /></a>
                  <a href=""></a>
                </p>
                </div>
                <div className="w-full p-6  text-slate-950 rounded-lg ">
                <h className="text-3xl font-bold">Profile summary</h>
                <p className="font-medium">Proactive and results-driven Full Stack Developer with strong leadership and problem-solving skills. Skilled in frontend and backend development, cloud infrastructure, and DevOps practices. Hands-on experience with the complete software development lifecycle, delivering scalable, secure, and high-performance web and mobile applications. </p>
                </div>
                <TechnicalSkillsList/>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Profile;