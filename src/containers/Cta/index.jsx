import "./styles.scss";
import { Button } from "../../components/Button";
export const Cta = () => {
  return (
    <div className="cta-div">
      <div className="cta-first-div">
        <p className="p1">
          Looking to raise capital for your growing business?
        </p>
        <p className="p2">
          Whether expanding or opening a brand-new concept, we make it easy to
          raise money from thousands of local investors.
        </p>

        <div className="cta-button">
          <Button>APPLY ONLINE</Button>
        </div>
      </div>
      <div className="cta-second-div">
      <div className="cta-img"></div>
      <img src="Shape.png" alt="img" />
    </div>
    </div>
  );
};
