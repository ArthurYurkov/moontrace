import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #e9e9e9;
    margin-top: 0;
  }
`;

export const ModalBackBTN = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.form`
  height: fit-content;
  width: 80vw;
  background: rgba(233, 233, 233, 0.25);
  box-shadow: 0 4px 32px 0 rgba(233, 233, 233, 0.27);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px 20px 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: -webkit-fill-available;
  gap: 5px;
`;

export const InputName = styled.p`
  color: #e9e9e9;
  margin: 0;
  font-weight: 700;
`;

export const Input = styled.input`
  height: 5vh;
  padding: 5px 20px;

  box-shadow: 0 4px 32px 0 rgba(233, 233, 233, 0.27);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  outline: none;
  color: #393a5a;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const ModalBTN = styled.button`
  padding: 10px 20px;
  /* background: rgba(233, 233, 233, 0.25); */
  box-shadow: 0 4px 32px 0 rgba(233, 233, 233, 0.27);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;
  color: #393a5a;
  font-size: 20px;
  font-weight: 500;
`;
