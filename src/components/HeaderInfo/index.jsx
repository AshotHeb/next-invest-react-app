import { Button } from "../Button"
import "./style.scss"

export const HeaderInfo=()=>{
    return(
        <div className="header-info-div">
            <div className="stay-connected-section">
                <button className="small-batton">New</button>
                <div>Stay connected to the upcoming & Recent jobs</div>
            </div>
            
            <h1 className="h1">Your Solution   Legal Consultacy</h1>
            <p className="p1">We are here to help you take care of your legality with the best service especially for you.</p>
             <Button>GET STARTED</Button>
             <p className="p2">Trusted by 10+ companies in indonesia</p>
            <div className="logo-div">
            
             <img src="images/airbnb.png" alt="img" className="logo"/>
             <img src="images/Hubspot.png" alt="img" className="logo"/>
             <img src="images/Microsoft.png" alt="img" className="logo"/>
             <img src="images/Google.png" alt="img" className="logo"/>
            </div>
            <img src="images/girl.png" alt="img" className="girl-img" />
            <div className="absolute-div">
                <p className="abs-p1">Tiara Andini</p>
                <p className="abs-p2">-Lawyer</p>
            </div>
            
        </div>
    )
}