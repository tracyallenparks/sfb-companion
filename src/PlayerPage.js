import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';

const PlayerPage = () => {
    //const players = useStoreState((state) => state.players);
    const { id } = useParams();
    const navigate = useNavigate();
    const getPlayerById = useStoreState((state) => state.getPlayerById);
    const player = getPlayerById(id);

    return (
        <main className="PlayerPage">
            {player &&
                <h2>{player.name}</h2>
                
            }
        </main>
    )
}

export default PlayerPage
