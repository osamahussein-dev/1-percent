import FooterLinks from "./FooterLinks";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; Special Topics Osama Hussein</p>
        <FooterLinks />
      </div>
    </footer>
  );
}

export default Footer;
