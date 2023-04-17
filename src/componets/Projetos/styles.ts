import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    > section{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        @media (max-width:1000px) {
          gap: 2rem;
        }
    }
`;

export const ProjetoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;

    > section  {
        width: 50rem;
        height: 100%;
        background: red;
        position: relative;

        > div.overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: ${({theme})=> theme.gradient};
        }
    }
`;