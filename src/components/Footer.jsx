import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../css/footer.css";
import FooterLinks from "./FooterLinks";
import RegularIcon from "./RegularIcon";
import { BiBox } from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <div className="container container-footer flex-col text-center md:text-left md:flex-row flex-wrap">
        <FooterLinks headingtitle={"About us"}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            adipisci, in non nihil velit quae incidunt rem, esse nam, ut iure!
          </p>

          <RegularIcon IconName={FaFacebook} />
          <RegularIcon IconName={FaTwitter} />
          <RegularIcon IconName={FaInstagram} />
          <RegularIcon IconName={FaLinkedin} />
        </FooterLinks>

        <FooterLinks
          headingtitle={"Quick Links"}
          Items={["Home", "About", "Services", "Contact"]}
        ></FooterLinks>

        <FooterLinks
          headingtitle={"Services"}
          Items={["Web Design", "Development", "Marketing", "Consulting"]}
        ></FooterLinks>

        <FooterLinks headingtitle={"About us"}>
          <p>Subscribe to our newsletter for updates</p>
          <div className="input-field">
            <input type="text" placeholder="Enter your email" />
            <div className="icon-input-ft">
              <RegularIcon IconName={BiBox} />
            </div>
          </div>
        </FooterLinks>
      </div>
    </footer>
  );
}

export default Footer;
