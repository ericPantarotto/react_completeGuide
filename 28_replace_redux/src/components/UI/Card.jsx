import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card' style={props.style}>
      {props.children}
    </div>
  );
};
Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default Card;
