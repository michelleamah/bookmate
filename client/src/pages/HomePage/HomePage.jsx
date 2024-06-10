import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='home'>
      <h1>BookMate</h1>
      <p>A genre based book recommendation application</p>
      <Link to="/genres">
        <button>Start Matching</button>
      </Link>
    </div>
  );
};

export default HomePage;
