import Players from './Players';
import { useStoreState } from 'easy-peasy';


const Session = () => {
    const session = useStoreState((state) => state.session);

    return (
        <>
            {session.players.map(player => (
                <Players key={player.id} player={player} />
            ))}
        </>
    )
}

export default Session