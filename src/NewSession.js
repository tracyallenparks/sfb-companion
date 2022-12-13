import uuid from 'react-uuid';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreState, useStoreActions } from 'easy-peasy';

const NewSession = () => {
    localStorage.removeItem('token')
    const newToken = uuid();
    const session = { "id":newToken };
    localStorage['token'] = newToken;

    const saveSession = useStoreActions((actions) => actions.saveSession);
    session.note = (new Date()).toString();

    saveSession(session);

    return (
        <main className="NewSession">
            <h1>New Session</h1>
            <p>{session.id}</p>
        </main>
    )
}

export default NewSession