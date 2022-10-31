import "./styles.scss"

export const Card=(props)=>{
    const{img,name,location,description,cont,range}=props;
    return(
   
    <div className="card-div">
        <img src={img} alt={'imag'} className ="main-img"/>
        <p className="card-name">{name}</p>
        <p className="card-location">{location}</p>
        <p className="card-description">{description}</p>
        <div className="cont">{cont}
        
        </div>
        <p className="card-range">{range}</p>   
    </div>
    
   
    
    )
}