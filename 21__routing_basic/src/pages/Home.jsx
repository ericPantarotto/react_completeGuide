import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/*NOTE: absolute */}
        {/* Go to <Link to='/products'>the list of products</Link> */}
        {/*NOTE: relative */}
        Go to <Link to='products'>the list of products</Link>
        {/* Go to <a href='/products'>the list of products</a> */}
      </p>
    </>
  );
}
export default HomePage;
