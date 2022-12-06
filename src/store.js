import { createStore, action, thunk } from "easy-peasy";
import api from './api/gameSessions';
//import uuid from "react-uuid";

export default createStore({
    session: [],
    setSession: action((state, payload) => {
        console.log("---->>> payload!");
        console.log(state,payload)
        state.session = payload
    }),
    saveSession: thunk(async (actions, newSession, helpers) => {
        //const { session } = helpers.getState();
        try {
            await api.post('/sessions', newSession);
            //actions.setSession([response.data]);
            //actions.setPostTitle('');
            //actions.setPostBody('');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    })
    /*
    session: [],
    setSession: action((state, payload) => {
        console.log('payload')
        state.session = payload;
    }),
   
    saveSession: thunk(async (actions, newSession, helpers) => {
        const { sessions } = helpers.getState();
        try {
            const response = await api.post('/sessions', newSession);
            actions.setSession([...sessions, response.data]);
            //actions.setPostTitle('');
            //actions.setPostBody('');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    players: [],
    setPlayers: action((state, payload) => {
        state.players = payload;
    }),
    */
});