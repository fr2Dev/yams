const getDicesNumbers = dices => dices.map(dice => dice.number);
const getUniqueDices = dices => [...new Set(dices)];

const useThrow = () => {
  return { getDicesNumbers, getUniqueDices };
};

export { getDicesNumbers, getUniqueDices };
export default useThrow;
