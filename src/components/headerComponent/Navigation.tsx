import {NavLink} from "react-router";
import './navigation.css'

const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav-link">
                    <p className='p_name'>Все котики</p>
                </NavLink>
                <NavLink to="/favorites" className="nav-link">
                    <p className='p_name'>Любимые котики</p>
                </NavLink>
            </nav>

        </header>
    );
};

export default Header;
