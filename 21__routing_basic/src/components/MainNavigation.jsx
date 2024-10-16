// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              // NOTE: absolute
              // to='/'
              // NOTE: relative
              to=''
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? 'center' : 'left',
              // })}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              // NOTE: absolute
              // to="/products"
              // NOTE: relative
              to='products'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// function MainNavigation() {
//   return (
//     <header className={classes.header}>
//       <nav>
//         <ul className={classes.list}>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/products'>Products</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

export default MainNavigation;
