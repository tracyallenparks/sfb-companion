import { Link } from 'react-router-dom';

const Header = ({ title }) => {

    return (
        <Link to="/" className="Header" >
            <header>
                <h1>{title}</h1>
            </header>
        </Link>
    )
}

export default Header