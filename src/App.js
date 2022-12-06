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
    
    let session;
    const sessionToken = localStorage['sfb-token'] || uuid();
    localStorage['sfb-token'] = sessionToken;

    const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/sessions/${sessionToken}`);

    if(fetchError){
        session = {"id":sessionToken};
    } else {
        session = data;
    }

    useEffect(() => {
        if(session){
            setSession(session);
        }
    },[session,setSession])

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