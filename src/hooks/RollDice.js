const RollDice = () => {
    const dieRoll = () => {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }
    return [dieRoll(),dieRoll()];
};

export default RollDice;