import "./style.scss"
import { Button } from "../Button"
export const HeaderInfo=()=>{
    return(
        <div className="header-info-div">
            <div className="stay-connected-section">
                <div>New</div>
                <div>Stay connected to the upcoming & Recent jobs</div>
            </div>
            
            <h1 className="h1">Your Solution   Legal Consultacy</h1>
            <p className="p1">We are here to help you take care of your legality with the best service especially for you.</p>
           <Button/>
            <p className="p2"></p>
            <div className="group-25"></div>
            <img src="images/girl.png" alt="img" className="girl-img" />
            <div className="absolute-div"></div>
            
        </div>
    )
}