import { createStore, action, thunk, computed } from "easy-peasy";
import api from './api/gameSessions';
import uuid from "react-uuid";

export default createStore({
    session: [],
    setSession: action((state, payload) => {
        state.session = payload;
    }),
    
    players: [],
    setPlayers: action((state, payload) => {
        state.players = payload;
    }),
});