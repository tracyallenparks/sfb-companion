import Session from './Session';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
    const sessionData = useStoreState((state) => state.session);

    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading app...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (sessionData && sessionData.players && sessionData.players.length ? <Session players={sessionData.players} /> : <p className="statusMsg">No session.</p>)}
        </main>
    )
}

export default Home
