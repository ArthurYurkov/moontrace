import { Container, AddCard } from './CardBar.styled';
import plusSvg from '../../images/plus.svg';
import { FC } from 'react';
// import CardList from './CardList/CardList'

type CardBarProps = {
  setModalHandler: (value: boolean) => void;
};

const CardBar: FC<CardBarProps> = ({ setModalHandler }) => {
  const addCardHandle = () => {
    setModalHandler(true);
  };
  return (
    <>
      <Container>
        {/* <CardList/> */}
        <AddCard onClick={addCardHandle}>
          <img src={plusSvg} height="17px" />
        </AddCard>
      </Container>
    </>
  );
};

export default CardBar;
