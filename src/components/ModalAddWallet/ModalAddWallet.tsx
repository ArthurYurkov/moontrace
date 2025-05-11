import {
  ModalContainer,
  ModalBTN,
  ModalBackBTN,
  Modal,
  InputContainer,
  InputName,
  Input,
} from './ModalAddWallet.styled';
import arrowLeftSvg from '../../images/arrowleft.svg';
import { FC, useState } from 'react';

type ModalAddProps = {
  setModalHandler: (value: boolean) => void;
};

const ModalAddWallet: FC<ModalAddProps> = ({ setModalHandler }) => {
  const [walletName, setWalletName] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');

  const handleBackClick = () => {
    setModalHandler(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'Wallet Name':
        setWalletName(value);
        break;

      case 'Wallet Address':
        setWalletAddress(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (walletName || walletAddress) {
      const formData = {
        userID: 1,
        walletname: walletName,
        walletaddress: walletAddress,
      };
    }
  };
  return (
    <>
      <ModalContainer>
        <h2>ADD WALLET</h2>
        <ModalBackBTN onClick={handleBackClick}>
          <img src={arrowLeftSvg} height="17px" />
        </ModalBackBTN>

        <Modal onSubmit={handleSubmit}>
          <InputContainer>
            <InputName>Name</InputName>
            <Input
              type="name"
              name="Wallet Name"
              placeholder="Example bitcoin, ethereum etc."
              value={walletName}
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <InputName>Wallet Address</InputName>
            <Input
              type="name"
              name="Wallet Address"
              placeholder="Paste here you`re wallet address"
              value={walletAddress}
              onChange={handleChange}
            />
          </InputContainer>
          <ModalBTN>Submit</ModalBTN>
        </Modal>
      </ModalContainer>
    </>
  );
};

export default ModalAddWallet;
