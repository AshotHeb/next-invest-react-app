import "./styles.scss"
import {Card} from "../Card"
export const Main=()=>{
    return(
        <div className="main-div">
            <div className="main-heading">
                <h2 className="h2">Offerings open for investment</h2>
                <p className="p">Explore pre-vetted investment opportunities available in a growing
                </p>
                <span className="p2"> number of industry categories.</span>
            </div>
            
       <div className="cards">
        <Card 
        img={"/images/Img.png"}
        name={"Oxalis"}
        location={"Brooklyn, NY"}
        description={"A recognized leader in language immersion & early education, opening second school."}
        
        range={"$574,920 raised of $1,000,000"}

        />
        <Card/>
        <Card/>

       </div>

        </div>
       
       
    )
}