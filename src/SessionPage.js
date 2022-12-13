import uuid from 'react-uuid';
import Players from './components/Players';
import { useParams, Link, useNavigate } from "react-router-dom";
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

const SessionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/sessions/`);

    const session = (!fetchError && !isLoading && data?.length && data.filter((data)=>{return data['id'] === id }))?data.filter((data)=>{return data['id'] === id })[0]:null;

    const foundOldSession = !!session?.players?.length;
    
    useEffect(()=>{
        if(fetchError){
            navigate('/')
        }
    });

    return (
        <main className="SessionPage">
            {isLoading && <p className="statusMsg">Loading app...</p>}
            {!isLoading && !fetchError && foundOldSession &&
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

export default SessionPage