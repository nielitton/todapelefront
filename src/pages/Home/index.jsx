import ClientCard from "../../components/clientCard";
import Header from "../../components/header";
import { HomePageStyle } from "./style";


function Home() {

    return(
        <HomePageStyle>
            <Header />
            <ClientCard />
        </HomePageStyle>
    )
}

export default Home