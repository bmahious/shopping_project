import { Outlet } from 'react-router-dom';
import '../../categories.styles.scss'
import DirectoryItem from '../../components/DirectoryItem/DirectoryItem';

const Home = () => {
      return (
        <div>
          <DirectoryItem />
          <Outlet />
        </div>
      );
}

export default Home