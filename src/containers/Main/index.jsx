import "./styles.scss"
import {Card} from "../Card"
import{Button} from "../../components/Button"
export const Main=()=>{
    return(
        <div className="main-div">
        
            <div className="main-heading">
                <h2 className="h2">Offerings open for investment</h2>
                <p className="p">Explore pre-vetted investment opportunities available in a growing
                </p>
                <span className="p2"> number of industry categories.</span>
            </div>
            
          <div className="card-wrapper">
        <Card 
        img={"/images/Img.png"} 
        name={"Oxalis"}
        location={"Brooklyn, NY"}
        description={"A recognized leader in language immersion & early education, opening second school."}
        cont={"/images/Bar.svg"}
        range={"$574,920 raised of $1,000,000"}
        />
        
        <Card  
        name={"Oxalis"}
        location={"Brooklyn, NY"}
        description={"A recognized leader in language immersion & early education, opening second school."}
        range={"$574,920 raised of $1,000,000"}
        />
        
        <Card  
        img={"/images/Img.jpg"}
        name={"Oxalis"}
        location={"Brooklyn, NY"}
        description={"A recognized leader in language immersion & early education, opening second school."}
        range={"$574,920 raised of $1,000,000"}
        />
        
        <Card  
        img={"/images/Img-4.png"}
        name={"Oxalis"}
        location={"Brooklyn, NY"}
        description={"A recognized leader in language immersion & early education, opening second school."}
        range={"$574,920 raised of $1,000,000"}
        />
        
        <Card  
        img={"/images/Img.png"}
        name={"Oxalis"}
        location={"Brooklyn, NY"}
        description={"A recognized leader in language immersion & early education, opening second school."}
        range={"$574,920 raised of $1,000,000"}
        />
        
        <Card  
        img={"/images/Img.png"}
        name={"Oxalis"}
        location={"Brooklyn, NY"}
        description={"A recognized leader in language immersion & early education, opening second school."}
        range={"$574,920 raised of $1,000,000"}
        />
</div>
<div className="main-button">
                <Button
                    outline
                    color="red"
                >
                    View All Projects
                </Button>
                </div>
</div>
       
 
       
       
    )
}