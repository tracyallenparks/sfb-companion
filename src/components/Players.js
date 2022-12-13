import { Link } from 'react-router-dom';
import Ships from './Ships';
const Players = ({ player }) => {

    return (
        <article className="player-card">
            <h3 className="player-name">
                <Link to={`/player/${player.id}`}>{player.name}</Link>
            </h3>
            <div className='ship-list'>
                {player.ships.map((ship) => (
                    <Ships key={ship.id} ship={ship} />
                ))}
            </div>
        </article>
    )
}

export default Players;