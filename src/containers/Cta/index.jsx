import "./styles.scss";
import { Button } from "../../components/Button";
export const Cta = () => {
  return (
    <div className="cta-div">
      <div className="cta-first-div">
        <p className="p-1">
          Looking to raise capital for your growing business?
        </p>
        <p className="p-2">
          Whether expanding or opening a brand-new concept, we make it easy to
          raise money from thousands of local investors.
        </p>

        
          <Button uniqueClassName ="cta-button">APPLY ONLINE</Button>
        
      </div>
      <div className="cta-second-div">
        <img src="Images/cta.png" alt="img" className="cta-img"/>
      <img src="Images/Shape.png" alt="img" className="shape-img"/>
      
    </div>
    </div>
  );
};
