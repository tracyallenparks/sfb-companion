import Layout from './Layout';
import Home from './Home';
import PlayerPage from './PlayerPage';
import Missing from './Missing';

import uuid from 'react-uuid';
import { Route, Routes } from 'react-router-dom';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

function App() {
    const setSession = useStoreActions((actions) => actions.setSession);
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/sessions');

    let sessionData = null;
    const sessionId = localStorage['sfb-token'] || uuid();
    localStorage['sfb-token'] = sessionId;
    
    if(data && data.length){
        data.forEach((data_session)=>{
            if(data_session.session_id && data_session.session_id.toString() === sessionId.toString()){
                sessionData = data_session;
                return;
            }
        })
    }

    useEffect(() => {
        setSession(sessionData);
    }, [sessionData, setSession])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home 
                    isLoading={isLoading}
                    fetchError={fetchError}
                />} />
                <Route path="player">
                    <Route path=":id" element={<PlayerPage />} />
                </Route>
                <Route path="*" element={<Missing />} />
            </Route>
            
        </Routes>
    );
}

export default App;