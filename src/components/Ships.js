import { Link } from 'react-router-dom';

const Ships = ({ ship }) => {

    return (
        <Link to={`/ship/${ship.id}`} className='ship-name'>{ ship.name }</Link>
    )
}

export default Ships