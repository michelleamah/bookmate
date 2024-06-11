import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__author">Made with ❤️ by Michelle Mah </p>
      <p className="footer__rights">&copy; {new Date().getFullYear()} Bookmate. 📚 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
