import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
  padding: 12px;
  border: 1px black solid;
`;

export const FormikFieldStyled = styled(Field)`
  padding: 8px;
  border: 1px rgba(0, 0, 0, 0.16) solid;
  border-radius: 8px;
  max-width: 180px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: tomato;
  font-size: 16px;
  font-weight: 700;
`;

export const LabelStyled = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

export const SubmitButtonStyled = styled.button`
  max-width: 106px;
  padding: 4px;
  border: 1px rgba(0, 0, 0, 0.16) solid;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
