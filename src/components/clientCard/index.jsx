import { ClientCardStyle } from "./style"


function ClientCard({client}) {

    return(
        <ClientCardStyle>
            <h2   className="client-name">clientName</h2>
            <span className="procediment-date">22/05/2022</span>
            <p    className="observation-client">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro necessitatibus vero animi magni, est amet, quam!</p>
        </ClientCardStyle>
    )

}

export default ClientCard