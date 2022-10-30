import "./styles.scss"
import { Card } from "../Card"
// import { Button } from "../../components/Button"

export const Main = () => {
    return (
        <div className="main-div">
            <div className="main-div-content">
                <div className="main-heading-section">
                    <h3 className="main-heading-section-h2">
                        Offerings open for investment
                    </h3>
                    <p className="main-heading-section-p ">
                        Explore pre-vetted investment opportunities available in a growing
                        number of industry categories.
                    </p>
                </div>
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
                    img={"/images/Img(3).png"}
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

        </div>
    )
}



/*Qo code*/
// import "./styles.scss"
// import { Card } from "../Card"
// import { Button } from "../../components/Button"
// export const Main = () => {
//     return (
//         <div className="main-div">

//             <div className="main-heading">
//                 <h2 className="h2">Offerings open for investment</h2>
//                 <p className="p">
//                     Explore pre-vetted investment opportunities available in a growing
//                     number of industry categories.
//                 </p>
//             </div>

//             <div className="card-wrapper">
//                 <Card
//                     img={"/images/Img.png"}
//                     name={"Oxalis"}
//                     location={"Brooklyn, NY"}
//                     description={"A recognized leader in language immersion & early education, opening second school."}
//                     cont={"/images/Bar.svg"}
//                     range={"$574,920 raised of $1,000,000"}
//                 />

//                 <Card

//                     name={"Oxalis"}
//                     location={"Brooklyn, NY"}
//                     description={"A recognized leader in language immersion & early education, opening second school."}
//                     range={"$574,920 raised of $1,000,000"}
//                 />

//                 <Card
//                     img={"/images/Img.jpg"}
//                     name={"Oxalis"}
//                     location={"Brooklyn, NY"}
//                     description={"A recognized leader in language immersion & early education, opening second school."}
//                     range={"$574,920 raised of $1,000,000"}
//                 />

//                 <Card
//                     img={"/images/Img(3).png"}
//                     name={"Oxalis"}
//                     location={"Brooklyn, NY"}
//                     description={"A recognized leader in language immersion & early education, opening second school."}
//                     range={"$574,920 raised of $1,000,000"}
//                 />

//                 <Card
//                     img={"/images/Img.png"}
//                     name={"Oxalis"}
//                     location={"Brooklyn, NY"}
//                     description={"A recognized leader in language immersion & early education, opening second school."}
//                     range={"$574,920 raised of $1,000,000"}
//                 />

//                 <Card
//                     img={"/images/Img.png"}
//                     name={"Oxalis"}
//                     location={"Brooklyn, NY"}
//                     description={"A recognized leader in language immersion & early education, opening second school."}
//                     range={"$574,920 raised of $1,000,000"}
//                 />
//             </div>
//             <div className="main-button">
//                 <Button
//                     outline
//                     color="red"
//                 >
//                     View All Projects
//                 </Button>
//             </div>
//         </div>




//     )
// }