import "./styles.scss"

export const Card=(props)=>{
    const{img,name,location,description,range}=props;
    return(
    <div className="card-div">
        <img src={img} alt={'imag'}/>
        <p className="card-name">{name}</p>
        <p className="card-location">{location}</p>
        <p className="card-description">{description}</p>
        <p className="card-range">{range}</p>   
    </div>
    )
}