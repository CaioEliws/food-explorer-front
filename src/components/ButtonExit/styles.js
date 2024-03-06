import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    align-items: center;

    background: none;
    border: none;

    color: ${({ theme}) => theme.COLORS.WHITE};
`;