import { InputStyled } from './Filter.styled';

export const ContactFilter = ({ onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <InputStyled onChange={e => onChange(e.target.value)}></InputStyled>
    </div>
  );
};
