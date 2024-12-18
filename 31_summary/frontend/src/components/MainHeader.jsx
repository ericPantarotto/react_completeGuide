// import PropTypes from 'prop-types';
import { MdMessage, MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link className={classes.button} to='/create-post'>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

// MainHeader.propTypes = {
//   onCreatePost: PropTypes.func,
// };
export default MainHeader;
