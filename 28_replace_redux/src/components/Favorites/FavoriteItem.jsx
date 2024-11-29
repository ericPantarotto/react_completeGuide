import PropTypes from 'prop-types';
import Card from '../UI/Card';
import './FavoriteItem.css';

const FavoriteItem = (props) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='favorite-item'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};
FavoriteItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default FavoriteItem;
