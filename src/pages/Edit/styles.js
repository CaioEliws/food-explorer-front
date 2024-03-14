import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header"
        "content"
        "footer"
    ;

    @media (max-width: 425px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    .tags {
        display: flex;
        
        min-width: 100%;
        min-height: 50px;
        
        border-radius: 8px;
        padding: 10px 10px;
        flex-wrap: wrap;
        
        gap: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        @media (max-width: 425px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.6rem;
            justify-items: center;
        }
    }

    .buttons {
        justify-content: end;

        @media (max-width: 425px) {
            display: flex;
            flex-direction: row;
            gap: 3.2rem;

            margin-bottom: 5rem;
        }
    }

    .btnSave {
        width: 200px;
        height: 50px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

        border-radius: 8px;
        border: none;
    }

    .btnDelete {
        width: 200px;
        height: 50px;

        border: none;
        border-radius: 8px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

`;

export const Form = styled.form`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    height: 100%;

    font-family: 'Poppins', sans-serif;
    
    header {
        padding-bottom: 20px;
        
        > h1 {
            padding-top: 20px;

            @media (max-width: 425px) {
                font-size: 2.6rem;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }

        @media (max-width: 425px) {
            margin-left: 3.2rem;
        }
    }
    
    > div {
        display: flex;
        gap: 40px;

        @media (max-width: 425px) {
            flex-direction: column;
            margin-left: 3.2rem;
            margin-right: 3.2rem;
            gap: 0;
        }
        
        select {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            
            padding-left: 20px;
            
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            
            border-radius: 8px;
            
            gap: 5px;
            padding: 12px 14px;
            
            border: none;
            
            color: ${({ theme }) => theme.COLORS.WHITE};

            appearance: none;
            -moz-appearance: none;
            
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-position: right 24px top 50%;

            cursor: pointer;
        }
    }
    `;