import "./style.scss";
import { HeaderNav } from "../../components/HeaderNav";
import { HeaderInfo } from "../../components/HeaderInfo";
export const Header = () => {
  return (
    <div className="header-div">
   
      <HeaderNav/>
      <HeaderInfo/>
      </div>
  );
};
