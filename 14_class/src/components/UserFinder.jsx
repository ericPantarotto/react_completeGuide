import { Component, Fragment } from 'react';

import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';
import classes from './UserFinder.module.css';
import Users from './Users';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      // filteredUsers: DUMMY_USERS,
      filteredUsers: [],
      searchTerm: '',
    };

    this.clearSearch = this.clearSearch.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        // filteredUsers: DUMMY_USERS.filter((user) =>
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  componentDidMount() {
    // send http request
    // this.setState({ filteredUsers: DUMMY_USERS });
    this.setState({ filteredUsers: this.context.users });
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  clearSearch() {
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <Fragment>
        {/* <UsersContext.Consumer></UsersContext.Consumer> */}
        <div className={classes.finder}>
          <input
            type='search'
            onChange={this.searchChangeHandler.bind(this)}
            value={this.state.searchTerm}
          />
        </div>
        <ErrorBoundary onDismiss={this.clearSearch}>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
