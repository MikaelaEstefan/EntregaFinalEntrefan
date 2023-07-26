import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
            <img className="logoSW" src="../pngwing.com.png" alt=""/>
        </Link>
        <nav>
                <ul>
                    <li>
                        <NavLink to={"/categoria/1"}> Lightsabers </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/categoria/2"}> Action Figures </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categoria/3"}> Collectibles </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categoria/4"}> Books and Comics </NavLink>
                    </li>
                </ul>
        </nav>
        <CartWidget/>
    </header>
  );
};

export default NavBar;

