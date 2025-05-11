import { HeaderContainer, HeaderLogo} from './Header.styled'
import logoSvg from '../../images/moonIcon.svg'
import nameSvg from '../../images/moonName.svg'

const Header = () => {
    return <>
        <HeaderContainer>
            <HeaderLogo>
                <img src={logoSvg}
                    height= "40px"
                />
                <img src={nameSvg}
                    height= "35px"
                />
            </HeaderLogo>
            
        </HeaderContainer>
    </>
};

export default Header;