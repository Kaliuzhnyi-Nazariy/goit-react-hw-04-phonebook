import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 380px;
  margin-top: 16px;
  margin-bottom: 16px;
  align-items: center;
`;

export const ConstactItem = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const ContactListStyled = styled.ul`
  margin: 0;
  padding: 0;
`;

export const DeleteButton = styled.button`
  background-color: white;
  padding: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px rgba(0, 0, 0, 0.16) solid;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
