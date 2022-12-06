import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreState, useStoreActions } from 'easy-peasy';

const NewSession = () => {
    const session = useStoreState((state) => state.session);
    const saveSession = useStoreActions((actions) => actions.saveSession);
    const { fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/sessions/${session.id}`);

    if(fetchError && !isLoading){
        session.note = "new session being posted";
        saveSession(session);
    }

    /*
    const [inputList, setInputList] = useState([
        new Core.ship(),
    ]);
    
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.currentTarget;
        const list = [...inputList];
        if(value && value !== ''){
            e.currentTarget.classList.remove('error');
            list[index][name] = value;
            setInputList(list);
        } else {
            e.currentTarget.classList.add('error');
        }
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = index => {
        setInputList([...inputList, new Core.ship()]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const all_inputs = document.getElementsByClassName('session-input-field');
        if(all_inputs.length > 2){
            for(let this_input of all_inputs){
                if (this_input.value && this_input.value !== ''){
                    this_input.classList.remove('error');
                } else {
                    this_input.classList.add('error');
                }
            }
            const all_errors = document.getElementsByClassName('error');
            if(all_errors.length === 0 && inputList.length > 0){
                inputList.forEach((player,index) => {
                    player.id = index;
                })
                window.sessionStorage.GameSession  = JSON.stringify(inputList);
            }
        } else {
            alert('Please enter at least two players');
        }
    }
    */
    return (
        <>
        <h2>New Game Session</h2>
        <p>{session.id}</p>
        <form className="session-input-container">
            {/*inputList.map((x, i) => {
                return (
                <div key={i} className="session-input">
                    <div className="session-input-label">Ship #{i + 1}:</div>
                    <input
                        type="text"
                        className="session-input-field session-captain"
                        name="captain"
                        placeholder="Enter Player Name"
                        value={x.captain}
                        onChange={e => handleInputChange(e, i)}
                        required
                    />
                    <input
                        type="text"
                        className="session-input-field session-ship"
                        name="ship"
                        placeholder="Enter Ship Name"
                        value={x.ship}
                        onChange={e => handleInputChange(e, i)}
                        required
                    />
                    <div className="session-add-inputs">
                        {inputList.length !== 1 && <div
                            className="session-input-button session-ship-remove"
                            onClick={() => handleRemoveClick(i)}>-</div>}
                {inputList.length - 1 === i && <div className="session-input-button session-ship-add" onClick={() => handleAddClick()}>+</div>}
                    </div>
                </div>
                );
            })*/}
            <button
                className="session-submit"
                //onClick={(e)=>{handleSubmit(e)}}
            >
            Submit</button>
        </form>
        </>
    );
}

export default NewSession