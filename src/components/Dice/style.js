import styled from 'styled-components';

const setDotsDisplay = number => {
  const spots = [
    ['five'],
    ['three', 'seven'],
    ['three', 'five', 'seven'],
    ['one', 'three', 'seven', 'nine'],
    ['one', 'three', 'seven', 'nine', 'five'],
    ['one', 'three', 'four', 'six', 'seven', 'nine']
  ];
  const setGridArea = nthChild => gridArea =>
    `&:nth-child(${nthChild}) { grid-area: ${gridArea}; }`;
  const setGridAreas = spots => `${spots.map((spot, i) => setGridArea(i + 1)(spot))}`;

  return setGridAreas(spots[number - 1]);
};

const Wrapper = styled.div`
  background: #fff;
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: ${({ isKept }) => isKept && '0 0 5px 2px green'};
  color: #333;
  height: ${({ size }) => size || '3rem'};
  position: relative;
  width: ${({ size }) => size || '3rem'};
`;

const Dot = styled.div`
  background-color: #333;
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
`;

const Side = styled.div`
  bottom: 0;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 'one two three' 'four five six' 'seven eight nine';
  left: 0;
  position: absolute;
  padding: 0.25rem;
  right: 0;
  top: 0;

  ${Dot} {
    ${({ number }) => setDotsDisplay(number)};
  }
`;

export { Wrapper, Dot, Side };
