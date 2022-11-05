import "./styles.scss";
import { Card } from "../Card";
import { Button } from "../../components/Button"

export const Main = () => {
  return (
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

      <div className="card-wrapper">
        <Card
          img={"/images/Img.png"}
          name={"Oxalis"}
          location={"Brooklyn, NY"}
          description={
            "A recognized leader in language immersion & early education, opening second school."
          }
          maxRange={1000000}
          range={574920}
        />

        <Card
          name={"Oxalis"}
          location={"Brooklyn, NY"}
          description={
            "A recognized leader in language immersion & early education, opening second school."
          }
          range={349909}
          maxRange={1000000}


        />

        <Card
          img={"/images/Img.jpg"}
          name={"Oxalis"}
          location={"Brooklyn, NY"}
          description={
            "A recognized leader in language immersion & early education, opening second school."
          }
          range={111000}
          maxRange={1000000}


        />

        <Card
          img={"/images/Img-four.png"}
          name={"Oxalis"}
          location={"Brooklyn, NY"}
          description={
            "A recognized leader in language immersion & early education, opening second school."
          }
          range={888666}
          maxRange={1000000}


        />

        <Card
          img={"/images/Img-5.png"}
          name={"Oxalis"}
          location={"Brooklyn, NY"}
          description={
            "A recognized leader in language immersion & early education, opening second school."
          }
          range={574920}
          maxRange={1000000}


        />

        <Card
          img={"/images/Img-7.png"}
          name={"Oxalis"}
          location={"Brooklyn, NY"}
          description={
            "A recognized leader in language immersion & early education, opening second school."
          }
          range={274920}
          maxRange={1000000}


        />
      </div>
      <div className="main-button">
        <Button outline color="red">
          View All Projects
        </Button>
      </div>
    </div>
  );
};
