import logo from '../assets/img/pizza-logo.svg';
import { Link } from 'react-router-dom';
import { Button } from './';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>Pizza in Cherkassy</h1>
              <p>Самая вкусная пицца в Черкасах</p>
            </div>
          </div>
        </Link>

        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
