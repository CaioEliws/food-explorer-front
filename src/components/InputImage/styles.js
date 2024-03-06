import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  > label {
    width: 100%;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    cursor: pointer;
    color: #C4C4CC;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 12px 14px;
  cursor: pointer;

  white-space: nowrap;
  
  p {
    font-size: 16px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};


  > input {
    visibility: hidden;
    position: fixed; 
  }

  > svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;