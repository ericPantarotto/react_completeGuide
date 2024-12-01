// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';
// import { useContext } from 'react';
// import { ProductsContext } from '../../context/product-context';
import { useStore } from '../../hooks-store/store';

const ProductItem = (props) => {
  // const dispatch = useDispatch();

  // const toggleFavHandler = () => {
  //   dispatch(toggleFav(props.id));
  // };

  // const toggleFav = useContext(ProductsContext).toggleFav;

  // const toggleFavHandler = () => {
  // toggleFav(props.id);
  // };

  const dispatch = useStore()[1];
  const toggleFavHandler = () => dispatch('TOGGLE_FAV', props.id);

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='product-item'>
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
