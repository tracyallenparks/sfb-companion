import Players from './Players';

const Session = ({ players }) => {
    return (
        <>
            {players.map(player => (
                <Players key={player.id} player={player} />
            ))}
        </>
    )
}

export default Session