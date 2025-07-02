import AirbnbClone from "./component/project/AirbnbClone"
import Stockmarke from "./component/project/Stockemarket"
import Socialmedia from "./component/project/Socialmedia"
function Project({ setPage, whiteBg = false }){
    return(
        <div className={whiteBg ? 'text-black' : ''}>
        <AirbnbClone setPage={setPage} whiteBg={whiteBg}/>
        <Stockmarke setPage={setPage} whiteBg={whiteBg}/>
        <Socialmedia setPage={setPage} whiteBg={whiteBg}/>
        </div>
    )
}
export default Project