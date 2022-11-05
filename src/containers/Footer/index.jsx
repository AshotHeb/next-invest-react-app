import "./styles.scss";
export const Footer = () => {
  return (
    <div className="footer-div">
      <div className="div-1">
        <h2 className="h2">NEXT INVEST</h2>
        <p className="p1">Copyright © 2020. LogoIpsum. All rights reserved.</p>

        <div className="form-div">
        <div className="input-div">
          <label className="label">Subscribe to our newsletter</label>
           <input 
            type="text"
            className="email-address"
            placeholder="Email  address"/>
          <img src="/images/Submit.png" alt="img"  />
          </div>
        </div>
      </div>

      <div className="div-2">
        <ul className="footer-list">
          Servises
          <li className="footer-items">Email Marketing</li>
          <li className="footer-items">Compeigns</li>
          <li className="footer-items">Brending</li>
          <li className="footer-items">Offline</li>
        </ul>
      </div>
      <div className="div-3">
        <ul className="footer-list">
          About
          <li className="footer-items">Our Story</li>
          <li className="footer-items">Benefits</li>
          <li className="footer-items">Team</li>
          <li className="footer-items">Careers</li>
        </ul>
      </div>

      <div className="div-4">
        <div className="div-4-top">
          <img src="images/top.png" alt="img" />
        </div>
        <div className="div-4-icons">
          <img src="images/F.png" alt="img" />
          <img src="images/Path.png" alt="img" />
          <img src="images/Ins.png" alt="img" />
        </div>
      </div>
    </div>
  );
};
