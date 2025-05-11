import { MainContainer, BGIMGO, BGIMGT, CardContaier } from './App.styled';
import BGO from './images/bgimage1.svg';
import BGT from './images/bgimage2.svg';
import Header from './components/Header/Header';
import CardBar from './components/CardBar/CardBar';
import ModalAddWallet from './components/ModalAddWallet/ModalAddWallet';
import { useState } from 'react';

function App() {
  const [modalHandler, setModalHandler] = useState<boolean | null>(false);

  return (
    <>
      {modalHandler ? (
        <MainContainer>
          <BGIMGO src={BGO} />
          <BGIMGT src={BGT} />
          <ModalAddWallet setModalHandler={setModalHandler} />
        </MainContainer>
      ) : (
        <MainContainer>
          <BGIMGO src={BGO} />
          <BGIMGT src={BGT} />
          <Header />
          <CardContaier>
            <CardBar setModalHandler={setModalHandler} />
          </CardContaier>
        </MainContainer>
      )}
    </>
  );
}

export default App;
