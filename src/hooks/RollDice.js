const RollDice = () => {
    const dieRoll = () => {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }
    const roll1 = dieRoll();
    const roll2 = dieRoll();
    return {rollOne:roll1,rollTwo:roll2,total:(roll1+roll2)};
};

export default RollDice;