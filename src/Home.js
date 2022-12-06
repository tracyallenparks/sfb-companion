import Session from './Session';
import NewSession from './NewSession';
import { useStoreState } from 'easy-peasy';

const Home = ({isLoading, fetchError }) => {
    const session = useStoreState((state) => state.session);

    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading app...</p>}
            {!isLoading && !fetchError && session?.players?.length && <Session />}
            {!isLoading && !session?.players?.length && <NewSession />}
        </main>
    )
}

export default Home
