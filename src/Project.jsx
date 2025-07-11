import AirbnbClone from "./component/project/AirbnbClone"
import Stockmarke from "./component/project/Stockemarket"
import Socialmedia from "./component/project/Socialmedia"
import Com from "./component/project/Com"
function Project({ setPage, whiteBg = false }){
    return(
        <div className="{whiteBg ? 'text-black' : ''} bg-gradient-to-b from-slate-800 to-slate-900 ">
        <AirbnbClone setPage={setPage} whiteBg={whiteBg}/>
        <Stockmarke setPage={setPage} whiteBg={whiteBg}/>
        <Socialmedia setPage={setPage} whiteBg={whiteBg}/>
        <Com setPage={setPage} whiteBg={whiteBg}/>
        </div>
    )
}
export default Project