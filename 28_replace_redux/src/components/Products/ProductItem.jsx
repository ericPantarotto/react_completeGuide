// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = props => {
  // const dispatch = useDispatch();

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};
ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  isFav: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default ProductItem;
