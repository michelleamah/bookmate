import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Michelle Mah </p>
      <p>&copy; {new Date().getFullYear()} Bookmate. 📚 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
