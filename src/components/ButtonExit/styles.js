import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    align-items: center;

    background: none;
    border: none;

    margin-top: 3rem;
    font-size: 2.4rem;

    color: ${({ theme}) => theme.COLORS.WHITE};

    @media (max-width: 425px) {
        font-size: 2rem; 
    }
`;