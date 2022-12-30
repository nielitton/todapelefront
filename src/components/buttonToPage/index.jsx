import { ButtonToPageStyle } from "./style";


function ButtonToPage({children}) {

    return(
        <ButtonToPageStyle>
            {children}
        </ButtonToPageStyle>
    )
}

export default ButtonToPage