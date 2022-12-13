import SessionSetup from './hooks/SessionSetup';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    const { session,fetchError,isLoading } = SessionSetup();

    const handleSession = (e) => {
        e.preventDefault();
        navigate(`session/${session.id}`);
    };
    const handleEditSession = (e) => {
        e.preventDefault();
        navigate(`session-edit/${session.id}`);
    };
    const handleNewSession = (e) => {
        e.preventDefault();
        navigate('new-session/');
    };

    return (
        <main className="Home">
            {isLoading && <p>app is loading...</p>}
            {!isLoading && !fetchError && (!!session?.players?.length) &&
                <>
                    <p>{(session.players.length > 1)?`looks like you have a session with ${session.players.length} players.`:`It seems you have an incomplete session setup`}</p>

                    <p>Would you like to continue with this session or start a new one?</p>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={(e)=>{handleNewSession(e)}}
                    >New Session</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e)=>{(session.players.length > 1)?handleSession(e):handleEditSession(e)}}
                    >Continue Session</button>
                </>
            }
            {!isLoading && !(!!session?.players?.length) &&
                <>
                    <p>It doesn't appear that you have a session in the system. Start a new one?</p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e)=>{handleNewSession(e)}}
                    >New Session</button>
                </>
            }
        </main>
    )
}

export default Home;