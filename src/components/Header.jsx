import { FiMenu } from "react-icons/fi"
import './Header.css'

function Headerlayout ({Center = 'المنزل'}){
    return(
            <div className="HWL">
                <h2>النادي</h2>
                <h3 className="center">{Center}</h3>
                <FiMenu size={20}/>
            </div>
    )
}

export default Headerlayout;
