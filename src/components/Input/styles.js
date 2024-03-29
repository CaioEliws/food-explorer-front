import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
    border-radius: 8px;

    gap: 5px;

    padding-left: 8px;
    
    margin-bottom: 5px;

    > input {
        width: 100%;
        height: 100%;
        
        padding: 12px 14px;
        
        background: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;