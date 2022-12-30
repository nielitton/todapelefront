import styled from "styled-components";


export const ClientCardStyle = styled.div`

    display: flex;
    padding: 25px 25px;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    color: var(--white-color);
    width: 80%;
    max-height: 350px;
    min-height: 300px;
    background-color: var(--primary-color);
    margin-top: 50px;
    border-radius: 25px;
    font-size: 18px;

    .client-name {
        font-size: 2rem;
    }
`