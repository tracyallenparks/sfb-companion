import SessionSetup from './hooks/SessionSetup';
import Players from './components/Players';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const SessionPage = () => {
    const navigate = useNavigate();
    const { session,fetchError,isLoading } = SessionSetup();
    
    useEffect(()=>{
        if(fetchError){
            navigate('/')
        }
    });

    return (
        <main className="SessionPage">
            {isLoading && <p className="statusMsg">Loading app...</p>}
            {!isLoading && !fetchError && (!!session?.players?.length) &&
                <>
                <h1>Current Session</h1>
                <p>{session.id}</p>
                <p>{session.note}</p>
                {session.players.map(player => (
                    <Players key={player.id} player={player} />
                ))}
                </>
            }
        </main>
    )
}

export default SessionPage;