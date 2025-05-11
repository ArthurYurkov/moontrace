import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AddCard = styled.button`
  height: 8vh;
  width: 17vw;
  background: rgba(233, 233, 233, 0.25);
  /* box-shadow: 0 4px 32px 0 rgba( 233, 233, 233, 0.27 ); */
  backdrop-filter: blur(4px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
