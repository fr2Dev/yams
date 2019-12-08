import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: 100vw;
  z-index: 1;
`;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  content: '';
  position: absolute;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;

  & > * {
    background-color: #fff;
    border-radius: 4px;
    font-size: 26px;
    padding: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > * {
      color: orangered;
      font-weight: bold;
    }
  }
`;

export { Title, Container, Modal };
