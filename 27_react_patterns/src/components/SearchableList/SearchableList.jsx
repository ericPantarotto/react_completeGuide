import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='searchable-list'>
      <input type='search' placeholder='Search' onChange={handleChange} />
      <ul>
        {/* {searchResults.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))} */}
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
SearchableList.propTypes = {
  items: PropTypes.array,
  children: PropTypes.func,
  itemKeyFn: PropTypes.func,
};
