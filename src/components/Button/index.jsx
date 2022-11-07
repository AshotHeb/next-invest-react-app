
import "./style.css"
export const Button=({children,uniqueClassName,size})=>{
    const classNames=["reusable-button"]
    if(uniqueClassName){
        classNames.push(uniqueClassName)
    }
    if(size){
        classNames.push(size)
    }
    return(
<button className="button">{children}</button>
    )
}