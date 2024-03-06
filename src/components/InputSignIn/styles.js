import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    
    border-radius: 8px;

    gap: 5px;
    
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    > input {
        width: 350px;
        
        padding: 12px 14px;
        
        background: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;