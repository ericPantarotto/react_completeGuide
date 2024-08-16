import logo from '../assets/logo.png';
// import './Header.css';
import classes from './Header.module.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt='A canvas' />
      <h1>ReactArt</h1>
      {/* <p style={{
        color: 'red',
        fontWeight: 'bold'
      }}>A community of artists and art-lovers.</p> */}
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
