import logo from "../../assets/img/logo.png"
import ButtonToPage from "../buttonToPage"
import { BsFillPeopleFill } from "react-icons/bs"
import { AiFillFilter } from "react-icons/ai"
import { HeaderStyle } from "./style"

const Header = () => {
    let left = true

    return(
        <HeaderStyle className="header header-home">   
            <img src={logo} alt="Logo toda pele" className="logo-home"/>
            <ButtonToPage><BsFillPeopleFill /></ButtonToPage>
            <ButtonToPage><AiFillFilter /></ButtonToPage>
        </HeaderStyle>
    )

}

export default Header