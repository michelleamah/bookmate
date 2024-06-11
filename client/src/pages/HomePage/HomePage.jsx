import { Link } from 'react-router-dom';
import './HomePage.scss';
import logo from '../../assets/images/logo.png';


const HomePage = () => {
  return (
    <div className='home'>
    <img className='home__logo' src={logo} alt="Bookmate Logo" />
      <h1 className='home__title'>BookMate</h1>
      <p className='home__description'>A dating app for bookworms...but with books!</p>
      <Link to="/genres">
        <button className='home__button'>Start Matching</button>
      </Link>
    </div>
  );
};

export default HomePage;
